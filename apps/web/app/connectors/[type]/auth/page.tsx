'use client'
import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MockAuthPage({ params }: { params: Promise<{ type: string }> }) {
  const router = useRouter()
  const { type } = use(params)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleApprove = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/connectors/${type}/authorize`, {
        method: 'POST',
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to authorize')
      }
      
      window.location.href = data.redirect || '/connectors'
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  const connectorName = type.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="h-2 bg-indigo-600"></div>
        <div className="p-8">
          <Link href="/connectors" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to App
          </Link>

          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
            Connect {connectorName}
          </h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            AI Employee Platform is requesting access to your {connectorName} account to analyze your data and provide actionable recommendations.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-2">This app will be able to:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">✓</span>
                View your store data (orders, inventory, customers)
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">✓</span>
                Read campaign performance metrics
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">✓</span>
                Access historical analytics
              </li>
            </ul>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => router.push('/connectors')}
              disabled={loading}
              className="flex-1 px-4 py-3 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleApprove}
              disabled={loading}
              className="flex-1 px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Approve Access'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
