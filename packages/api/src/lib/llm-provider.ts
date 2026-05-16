import { GoogleGenerativeAI } from '@google/generative-ai'

const geminiClient = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || '')

// gemini-3.1-flash-lite: stable, fast, cost-effective for classification + generation
const geminiModel = geminiClient.getGenerativeModel(
  { model: 'gemini-3.1-flash-lite' },
  { apiVersion: 'v1beta' }
)

async function callGemini(prompt: string): Promise<string> {
  try {
    const result = await geminiModel.generateContent(prompt)
    return result.response.text()
  } catch (error: any) {
    console.error('[LLM] Gemini call failed:', error.message)
    throw error
  }
}

export const llm = {
  classify: callGemini,
  summarize: callGemini,
  generate: callGemini
}
