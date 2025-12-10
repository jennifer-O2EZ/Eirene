import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getOracleWisdom = async (mood: string): Promise<string> => {
  if (!apiKey) {
    return "The Oracle is currently meditating. Please ensure the API key is configured.";
  }

  const systemInstruction = `
    You are the "Oracle of Eirene". You represent a luxury wellness brand rooted in Greek mythology.
    Your tone is wise, soothing, poetic, timeless, and elegant.
    You connect modern wellness needs with ancient Greek concepts (Eirene, Iaso, Ambrosia, etc.).
    Provide a short, 2-3 sentence piece of wisdom or affirmation based on the user's input.
    Do not be medical. Be philosophical and spiritual.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The seeker feels: "${mood}". Offer them wisdom from the sanctuary.`,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Low latency preferred for this interaction
      },
    });

    return response.text || "Peace comes from within.";
  } catch (error) {
    console.error("Oracle error:", error);
    return "The mists of time obscure the answer. Please try again later.";
  }
};
