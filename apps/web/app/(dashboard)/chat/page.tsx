'use client'
import { useState, useRef, useEffect } from 'react'
import { api } from '@/lib/api'
import { useSession } from '@/components/providers/session-provider'
import { Send, Bot, User, Loader2, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  toolsUsed?: string[]
  loading?: boolean
}

const suggestedQuestions = [
  'What was my total revenue last month?',
  'Which campaign had the highest ROAS?',
  'Which SKUs are low on stock?',
  'What is my customer acquisition cost?',
  'What is my refund rate?',
]

export default function ChatPage() {
  const session = useSession()
  const merchantId = session?.merchantId || ''
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI business analyst. Ask me anything about your revenue, campaigns, inventory, or metrics. Every number I give you will have a source citation.',
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMessage: Message = { role: 'user', content: text }
    const loadingMessage: Message = { role: 'assistant', content: '', loading: true }

    setMessages(prev => [...prev, userMessage, loadingMessage])
    setInput('')
    setLoading(true)

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }))
      const result = await api.sendMessage(merchantId, text, history)

      setMessages(prev => [
        ...prev.slice(0, -1),
        {
          role: 'assistant',
          content: result.response,
          toolsUsed: result.metadata?.toolsUsed || [],
        }
      ])
    } catch (error) {
      setMessages(prev => [
        ...prev.slice(0, -1),
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-3xl mx-auto">
      {/* Citation Notice */}
      <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-4 text-sm text-blue-800">
        <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
        <span>Every number in my responses includes a <strong>[Source: ...]</strong> citation traceable to your actual data.</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4 px-1">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1 border border-indigo-200">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
            )}

            <div className={cn(
              'max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm',
              msg.role === 'user'
                ? 'bg-indigo-600 text-white rounded-tr-sm'
                : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm'
            )}>
              {msg.loading ? (
                <div className="flex items-center gap-2 text-slate-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing data...</span>
                </div>
              ) : (
                <>
                  <CitedMessage content={msg.content} isUser={msg.role === 'user'} />
                  {msg.toolsUsed && msg.toolsUsed.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                      {msg.toolsUsed.map(tool => (
                        <span key={tool} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-tight font-medium">
                          🔧 {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1 border border-indigo-700">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestedQuestions.map(q => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:bg-slate-50 hover:border-indigo-300 transition-colors shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 bg-white border border-slate-200 rounded-xl p-2 shadow-lg ring-1 ring-slate-200">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
          placeholder="Ask about your revenue, campaigns, inventory..."
          className="flex-1 px-3 py-2 text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
          disabled={loading}
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 disabled:opacity-50 transition-colors shadow-sm flex items-center justify-center"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

function CitedMessage({ content, isUser }: { content: string; isUser: boolean }) {
  if (isUser) return <p className="whitespace-pre-wrap">{content}</p>

  const parts = content.split(/(\[Source:[^\]]+\])/g)
  return (
    <p className="whitespace-pre-wrap leading-relaxed">
      {parts.map((part, i) =>
        part.startsWith('[Source:') ? (
          <span key={i} className="inline-flex items-center gap-1 mx-0.5 px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] rounded-full border border-indigo-100 font-mono font-bold tracking-tight">
            📎 {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  )
}
