
import { GoogleGenAI } from "@google/genai";

// Fix: Use process.env.API_KEY directly and ensure named parameter initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistance = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      // Fix: Use 'gemini-3-flash-preview' for simple Q&A tasks as per guidelines
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an AI assistant for WebEasily, a digital agency specializing in Web Development, Social Media Management, and Digital Marketing. 
        Your goal is to answer client questions about these services professionally and concisely. 
        Promote WebEasily's values: Simplicity, Results, and Professionalism.
        Keep answers short and focused on how the agency can help businesses grow.`,
        temperature: 0.7,
      }
    });
    // Fix: Access .text as a property directly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please feel free to use our contact form!";
  }
};