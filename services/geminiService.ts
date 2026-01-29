
import { GoogleGenAI, Type } from "@google/genai";

export const askGeminiAboutPoem = async (poemTitle: string, userQuestion: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `
      你是一位親切、充滿智慧的西班牙文學老師，現在正在教導國小五、六年級的小學生。
      
      目前我們正在賞析這首詩/文章：『${poemTitle}』。
      學生的問題是：『${userQuestion}』。
      
      請用簡單易懂、可愛溫暖的語氣回答。可以使用一些擬人化或生活中的例子。
      回答請限制在 150 字以內，繁體中文。
    `,
    config: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
    }
  });

  return response.text;
};
