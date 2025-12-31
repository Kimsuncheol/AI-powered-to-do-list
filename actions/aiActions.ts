'use server';

import { z } from "zod";
import { smartModel } from "@/lib/ai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const TaskSchema = z.object({
  title: z.string().describe("The main title of the task"),
  description: z.string().optional().describe("Additional details or context"),
  dueDate: z.string().optional().describe("ISO date string if a date is mentioned"),
  priority: z.enum(['low', 'medium', 'high']).optional().describe("Priority level inferred from urgency"),
  tags: z.array(z.string()).optional().describe("Relevant categories or labels"),
});

const SubtaskSchema = z.object({
  subtasks: z.array(z.object({
    title: z.string().describe("The subtask title"),
    completed: z.boolean().describe("Always false initially"),
  })).describe("A list of subtasks to complete the main task"),
});

export async function generateSubtasksAction(taskTitle: string, taskDescription?: string) {
  try {
    const structuredLlm = smartModel.withStructuredOutput(SubtaskSchema);
    
    const input = `Task: ${taskTitle}\n${taskDescription ? `Description: ${taskDescription}` : ''}\n\nBreak this task down into 3-5 actionable subtasks.`;
    
    const response = await structuredLlm.invoke([
      new SystemMessage("You are an expert project manager. Break down tasks into clear, actionable steps."),
      new HumanMessage(input)
    ]);

    return { success: true, data: response.subtasks };
  } catch (error) {
    console.error("AI Subtask Error:", error);
    return { success: false, error: "Failed to generate subtasks" };
  }
}

export async function parseTaskAction(input: string) {
  try {
    const structuredLlm = smartModel.withStructuredOutput(TaskSchema);
    
    const response = await structuredLlm.invoke([
      new SystemMessage("You are a helpful assistant that extracts task details from natural language input. Today is " + new Date().toISOString()),
      new HumanMessage(input)
    ]);

    return { success: true, data: response };
  } catch (error) {
    console.error("AI Parse Error:", error);
    return { success: false, error: "Failed to parse task" };
  }
}
