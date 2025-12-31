import { ChatVertexAI } from "@langchain/google-vertexai";

// Initialize Gemini model
// Requires GOOGLE_APPLICATION_CREDENTIALS or appropriate environment setup
export const model = new ChatVertexAI({
  model: "gemini-1.5-flash",
  temperature: 0.7,
  maxRetries: 2,
  // apiEndpoint: "us-central1-aiplatform.googleapis.com", // Optional: specify region
});

export const smartModel = new ChatVertexAI({
  model: "gemini-1.5-pro",
  temperature: 0.2, // Lower temperature for more deterministic tasks like parsing
});
