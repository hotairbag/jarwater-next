import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });

export const generateCreativeConcept = async (
  brandName: string,
  industry: string,
  vibe: string
): Promise<string> => {
  try {
    const prompt = `
      You are a creative director at a high-end motion design studio called "Jarwater".

      Client Name: ${brandName}
      Industry: ${industry}
      Desired Vibe: ${vibe}

      Create a short, abstract, high-concept motion video treatment (max 150 words).
      Describe the visuals, the motion style, and the audio atmosphere.
      Do not write a full script with dialogue. Focus on the visual journey and how it represents the brand fluidly.
      Keep the tone sophisticated, artistic, and evocative.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text || "Unable to generate concept at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our creative engines are cooling down. Please try again in a moment.";
  }
};
