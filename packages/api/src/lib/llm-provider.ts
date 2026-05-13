import { GoogleGenerativeAI } from '@google/generative-ai'

const geminiClient = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || 'dummy_key')
const geminiModel = geminiClient.getGenerativeModel({ model: 'gemini-3-flash' }, { apiVersion: 'v1' })

async function callGemini(prompt: string): Promise<string> {
  try {
    const result = await geminiModel.generateContent(prompt)
    return result.response.text()
  } catch (error: any) {
    console.error('Gemini failed:', error.message)
    throw error
  }
}

export const llm = {
  classify: callGemini,
  summarize: callGemini,
  generate: callGemini
}
