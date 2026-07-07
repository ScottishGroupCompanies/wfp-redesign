import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "AIzaSyCmwa3AfQNErVFfssm6sLwY_q1LmDyKMgI",
  httpOptions: { timeout: 120000 }
});

const IMAGE_MODELS = [
  'gemini-3.1-flash-image-preview',
  'gemini-2.5-flash-image',
];

const prompt = `Philadelphia historic commercial storefront at golden hour. Red brick facade, tall pristine plate glass display windows reflecting warm afternoon light, iron signage details, vintage neighborhood charm. Street-level perspective. Photorealistic architectural photography. The glass looks immaculately clean and protected. Professional editorial quality. No text, no graffiti.`;

const outPath = path.resolve("public/images/anti-graffiti-window-film-philadelphia.jpg");

async function generate() {
  for (const model of IMAGE_MODELS) {
    try {
      console.log(`Trying model: ${model}`);
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        generationConfig: { imageConfig: { aspectRatio: '16:9' } }
      });
      for (const part of response.candidates?.[0]?.content?.parts ?? []) {
        if (part.inlineData?.data) {
          fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
          console.log(`✅ Saved to ${outPath}`);
          return;
        }
      }
      throw new Error('No image data in response');
    } catch (e) {
      const isRetryable = e.message.includes('503') || e.message.includes('timeout') || e.message.includes('UNAVAILABLE');
      console.warn(`${model} failed: ${e.message}`);
      if (!isRetryable || model === IMAGE_MODELS[IMAGE_MODELS.length - 1]) throw e;
      console.log(`Falling back to next model...`);
    }
  }
}

generate().catch(console.error);
