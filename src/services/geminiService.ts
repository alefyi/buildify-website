
import { GoogleGenAI, Type } from "@google/genai";
import { SitePreviewData, EstimationResult } from "../types";

// Always initialize GoogleGenAI with the API key directly from process.env.API_KEY using named parameters.
if (!process.env.API_KEY) {
    throw new Error("Missing API_KEY in environment variables. Please check your .env.local file.");
}
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSitePreview = async (prompt: string): Promise<SitePreviewData> => {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a high-level website structure for: "${prompt}". Provide a hero title, subtitle, a brand primary hex color, and 3 key sections (features or about).`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    heroTitle: { type: Type.STRING },
                    heroSub: { type: Type.STRING },
                    primaryColor: { type: Type.STRING, description: "A hex code like #6366f1" },
                    sections: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                title: { type: Type.STRING },
                                body: { type: Type.STRING }
                            },
                            required: ["title", "body"]
                        }
                    }
                },
                required: ["heroTitle", "heroSub", "primaryColor", "sections"]
            }
        }
    });

    const jsonStr = response.text || "";
    return JSON.parse(jsonStr) as SitePreviewData;
};

export const estimateLoyaltyImpact = async (business: string): Promise<EstimationResult> => {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Act as a senior business analyst. Estimate the potential annual impact of a modern loyalty program for this business: "${business}". 
    Consider its likely industry, size, and market. 
    Return a realistic but optimistic estimation of additional revenue (in dollars or percentage) and number of customers retained.
    Format as JSON.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    revenueIncrease: { type: Type.STRING, description: "e.g., $142,000 or +22%" },
                    customersKept: { type: Type.STRING, description: "e.g., 1,200 or 15,000" }
                },
                required: ["revenueIncrease", "customersKept"]
            }
        }
    });

    const jsonStr = response.text || "";
    return JSON.parse(jsonStr) as EstimationResult;
};
