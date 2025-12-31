'use server';

import { runAgent } from "@/lib/agent";

export interface AgentMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function runAgentAction(
  userMessage: string,
  userId: string,
  chatHistory: AgentMessage[] = []
): Promise<{ success: boolean; response: string; error?: string }> {
  try {
    const response = await runAgent(userMessage, userId, chatHistory);

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error("Agent error:", error);
    return {
      success: false,
      response: "",
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
