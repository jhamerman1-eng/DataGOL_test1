import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the DataGol Deep Expert, the primary intelligence behind ContextOS. 
Your goal is to provide authoritative, technical, and strategic insights into how DataGol transforms enterprise data into verifiable action.

Core Knowledge Base:
- THE LIVING LOOP: DataGol's proprietary 5-step methodology.
  1. UNIFY: Ingesting fragmented data (ERP, CRM, SQL, NoSQL) into a single governed layer.
  2. UNDERSTAND: Building a semantic context layer where data has business meaning.
  3. ASK: Natural language querying via ContextOS.
  4. EXECUTE: Automating workflows and updating source systems directly.
  5. VERIFY: Full audit trails and logic citations for every AI-driven action.

- VALUE PROPOSITION:
  - Reduced "Dashboard Fatigue": We don't just show charts; we provide answers and actions.
  - Faster ROI: Implementation in 8-10 weeks vs. 9+ months for legacy BI.
  - Trust: Every decision is cited and reversible.

Tone: Authoritative, visionary, yet highly practical. Use professional enterprise terminology (e.g., "operational drag", "data silos", "semantic mapping", "closed-loop intelligence").

Response Format: You MUST respond in JSON format with:
1. "answer": A concise, expert explanation (max 3 sentences).
2. "suggestions": 2-3 expert follow-up questions focused on technical implementation or strategic ROI.`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export interface AgentResponse {
  answer: string;
  suggestions: string[];
}

export const chatWithAgent = async (message: string): Promise<AgentResponse> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            answer: { type: Type.STRING },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["answer", "suggestions"]
        }
      }
    });
    
    const data = JSON.parse(response.text || "{}");
    return {
      answer: data.answer || "I am currently analyzing your architectural query. Please rephrase for a deeper technical breakdown.",
      suggestions: data.suggestions || ["Explain the Unify layer", "How does Verify work?"]
    };
  } catch (error) {
    console.error("Agent Error:", error);
    return {
      answer: "Neural bridge interrupted. I'm recalibrating the ContextOS core. Please stand by.",
      suggestions: ["Retry connection", "What is the Living Loop?"]
    };
  }
};