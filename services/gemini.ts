
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getJourneyRecommendation(preferences: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Preferences: ${preferences}\n\nAct as a luxury Umrah travel consultant for Arabian Star Umrah Services. Based on the user's preferences, provide a short, professional, and spiritual recommendation for their journey. Include hotel suggestions, transport types, and a brief itinerary concept. Focus on premium services.`,
      config: {
        systemInstruction: "You are an expert concierge for Arabian Star Umrah Services. You provide spiritual, respectful, and luxury-oriented travel advice for pilgrims.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm unable to provide a recommendation at the moment. Please contact our WhatsApp support for personalized assistance.";
  }
}
