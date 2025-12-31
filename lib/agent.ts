import { DynamicStructuredTool } from "@langchain/core/tools";
import { smartModel } from "./ai";
import { taskService } from "@/services/taskService";
import { z } from "zod";
import { AIMessage, HumanMessage, BaseMessage, SystemMessage, ToolMessage } from "@langchain/core/messages";

// Tool: List all tasks for a user
const listTasksTool = new DynamicStructuredTool({
  name: "list_tasks",
  description: "List all tasks for the current user. Use this when the user wants to see their tasks, check what they need to do, or review their todo list.",
  schema: z.object({
    filter: z.enum(["all", "completed", "pending"]).optional().describe("Filter tasks by status. Default is 'all'."),
  }),
  func: async ({ filter }) => {
    // userId will be injected at runtime
    return JSON.stringify({ action: "list_tasks", filter: filter || "all" });
  },
});

// Tool: Add a new task
const addTaskTool = new DynamicStructuredTool({
  name: "add_task",
  description: "Create a new task for the user. Use this when the user wants to add, create, or schedule a new task or todo item.",
  schema: z.object({
    title: z.string().describe("The title of the task"),
    description: z.string().optional().describe("Optional description or details"),
    priority: z.enum(["low", "medium", "high"]).optional().describe("Priority level"),
    dueDate: z.string().optional().describe("Due date in ISO format (YYYY-MM-DD)"),
    tags: z.array(z.string()).optional().describe("Optional tags for categorization"),
  }),
  func: async (params) => {
    return JSON.stringify({ action: "add_task", ...params });
  },
});

// Tool: Complete a task
const completeTaskTool = new DynamicStructuredTool({
  name: "complete_task",
  description: "Mark a task as completed. Use this when the user says they finished, completed, or done with a task.",
  schema: z.object({
    taskTitle: z.string().describe("The title or partial title of the task to complete"),
  }),
  func: async ({ taskTitle }) => {
    return JSON.stringify({ action: "complete_task", taskTitle });
  },
});

// Tool: Delete a task
const deleteTaskTool = new DynamicStructuredTool({
  name: "delete_task",
  description: "Delete a task permanently. Use this when the user wants to remove or delete a task.",
  schema: z.object({
    taskTitle: z.string().describe("The title or partial title of the task to delete"),
  }),
  func: async ({ taskTitle }) => {
    return JSON.stringify({ action: "delete_task", taskTitle });
  },
});

// All tools
const tools = [listTasksTool, addTaskTool, completeTaskTool, deleteTaskTool];

// Execute tool actions with actual user context
async function executeToolAction(action: string, params: Record<string, unknown>, userId: string): Promise<string> {
  switch (action) {
    case "list_tasks": {
      const filter = params.filter as string;
      const tasks = await taskService.getTasks(userId);
      
      let filteredTasks = tasks;
      if (filter === "completed") {
        filteredTasks = tasks.filter(t => t.completed);
      } else if (filter === "pending") {
        filteredTasks = tasks.filter(t => !t.completed);
      }
      
      if (filteredTasks.length === 0) {
        return filter === "all" 
          ? "You don't have any tasks yet." 
          : `You don't have any ${filter} tasks.`;
      }
      
      const taskList = filteredTasks.map((t, i) => {
        const status = t.completed ? "✅" : "⬜";
        const priority = t.priority ? ` [${t.priority}]` : "";
        const due = t.dueDate ? ` (due: ${new Date(t.dueDate).toLocaleDateString()})` : "";
        return `${i + 1}. ${status} ${t.title}${priority}${due}`;
      }).join("\n");
      
      return `Here are your ${filter || "all"} tasks:\n${taskList}`;
    }
    
    case "add_task": {
      const taskInput = {
        title: params.title as string,
        description: params.description as string | undefined,
        priority: params.priority as "low" | "medium" | "high" | undefined,
        tags: params.tags as string[] | undefined,
        completed: false,
        dueDate: params.dueDate ? new Date(params.dueDate as string) : undefined,
      };
      
      await taskService.addTask(taskInput, userId);
      
      let response = `✅ Task created: "${taskInput.title}"`;
      if (taskInput.priority) response += ` | Priority: ${taskInput.priority}`;
      if (taskInput.dueDate) response += ` | Due: ${taskInput.dueDate.toLocaleDateString()}`;
      
      return response;
    }
    
    case "complete_task": {
      const taskTitle = params.taskTitle as string;
      const tasks = await taskService.getTasks(userId);
      const task = tasks.find(t => 
        t.title.toLowerCase().includes(taskTitle.toLowerCase()) && !t.completed
      );
      
      if (!task) {
        return `Could not find an incomplete task matching "${taskTitle}". Please check your task list.`;
      }
      
      await taskService.toggleTaskCompletion(task.id, false);
      return `✅ Marked "${task.title}" as completed!`;
    }
    
    case "delete_task": {
      const taskTitle = params.taskTitle as string;
      const tasks = await taskService.getTasks(userId);
      const task = tasks.find(t => 
        t.title.toLowerCase().includes(taskTitle.toLowerCase())
      );
      
      if (!task) {
        return `Could not find a task matching "${taskTitle}". Please check your task list.`;
      }
      
      await taskService.deleteTask(task.id);
      return `🗑️ Deleted task: "${task.title}"`;
    }
    
    default:
      return "Unknown action";
  }
}

// Create the agent executor
export async function runAgent(
  userInput: string,
  userId: string,
  chatHistory: { role: 'user' | 'assistant'; content: string }[] = []
): Promise<string> {
  // Bind tools to model
  const modelWithTools = smartModel.bindTools(tools);
  
  // Build message history
  const messages: BaseMessage[] = [
    new SystemMessage(`You are a helpful task management assistant. You help users manage their todo list by creating, listing, completing, and deleting tasks.

When the user asks about their tasks, use the list_tasks tool.
When the user wants to add a new task, use the add_task tool. Parse natural language dates like "tomorrow", "next week", etc. into proper ISO dates.
When the user marks something as done or complete, use the complete_task tool.
When the user wants to delete or remove a task, use the delete_task tool.

Today's date is: ${new Date().toISOString().split('T')[0]}

Always be helpful, concise, and friendly. If you're unsure what the user wants, ask for clarification.`),
    ...chatHistory.map(msg => 
      msg.role === 'user' 
        ? new HumanMessage(msg.content)
        : new AIMessage(msg.content)
    ),
    new HumanMessage(userInput),
  ];

  // Get initial response with potential tool calls
  let response = await modelWithTools.invoke(messages);
  
  // Process tool calls in a loop (agent loop)
  let iterations = 0;
  const maxIterations = 5;
  
  while (response.tool_calls && response.tool_calls.length > 0 && iterations < maxIterations) {
    iterations++;
    
    // Add the AI message with tool calls
    messages.push(response);
    
    // Process each tool call
    for (const toolCall of response.tool_calls) {
      const toolResult = await executeToolAction(
        toolCall.name,
        toolCall.args as Record<string, unknown>,
        userId
      );
      
      messages.push(new ToolMessage({
        tool_call_id: toolCall.id || '',
        content: toolResult,
      }));
    }
    
    // Get next response
    response = await modelWithTools.invoke(messages);
  }

  // Return the final text response
  return typeof response.content === 'string' 
    ? response.content 
    : JSON.stringify(response.content);
}
