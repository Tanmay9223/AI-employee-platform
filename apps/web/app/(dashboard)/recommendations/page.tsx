'use client'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useSession } from '@/components/providers/session-provider'
import { CheckCircle, Clock, Play, BookOpen } from 'lucide-react'
import { formatCurrency, getRiskColor, cn } from '@/lib/utils'

export default function RecommendationsPage() {
  const session = useSession()
  const merchantId = session?.merchantId || ''
  const queryClient = useQueryClient()
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'dismissed'>('pending')
  const [agentRunning, setAgentRunning] = useState(false)

  const { data: recommendations, isLoading } = useQuery({
    queryKey: ['recommendations', merchantId, activeTab],
    queryFn: () => api.getRecommendations(merchantId, activeTab),
    enabled: !!merchantId,
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      api.updateRecommendation(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recommendations'] })
    },
  })

  const runAgent = async () => {
    setAgentRunning(true)
    try {
      await api.runAgent(merchantId)
      queryClient.invalidateQueries({ queryKey: ['recommendations'] })
    } catch (err) {
      console.error('Run agent failed', err)
    } finally {
      setAgentRunning(false)
    }
  }

  const tabs = [
    { key: 'pending',   label: 'Pending Review' },
    { key: 'approved',  label: 'Approved' },
    { key: 'dismissed', label: 'Dismissed' },
  ] as const

  return (
    <div className="max-w-3xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 bg-slate-100 rounded-lg p-1 border border-slate-200">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'px-4 py-1.5 rounded-md text-sm font-medium transition-all',
                activeTab === tab.key
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={runAgent}
          disabled={agentRunning}
          className="flex items-center gap-2 px-4 py-2 border border-indigo-200 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors disabled:opacity-50"
        >
          <Play className={cn('w-3.5 h-3.5', agentRunning && 'animate-pulse')} />
          {agentRunning ? 'Running Agent...' : 'Run Agent Now'}
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-slate-400 text-sm animate-pulse">Loading recommendations...</div>
      ) : !recommendations?.length ? (
        <div className="bg-white border border-slate-200 rounded-xl py-16 text-center shadow-sm">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-medium text-slate-700">No {activeTab} recommendations</p>
          <p className="text-sm text-slate-400 mt-1">
            {activeTab === 'pending' ? 'Run the agent to generate new recommendations' : `Nothing ${activeTab} yet`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {recommendations.map((rec: any) => (
            <RecommendationCard
              key={rec.id}
              rec={rec}
              showActions={activeTab === 'pending'}
              onApprove={() => updateMutation.mutate({ id: rec.id, status: 'approved' })}
              onDismiss={() => updateMutation.mutate({ id: rec.id, status: 'dismissed' })}
              onSnooze={() => updateMutation.mutate({ id: rec.id, status: 'snoozed' })}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function RecommendationCard({ rec, showActions, onApprove, onDismiss, onSnooze }: any) {
  const [expanded, setExpanded] = useState(false)
  const citations: string[] = typeof rec.citations === 'string'
    ? JSON.parse(rec.citations)
    : rec.citations || []

  return (
    <div className={cn('bg-white rounded-xl border p-5 space-y-4 shadow-sm transition-all hover:shadow-md', getRiskColor(rec.riskLevel).split(' ').slice(1).join(' '))}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className={cn('text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider', getRiskColor(rec.riskLevel))}>
            {rec.riskLevel}
          </span>
          <div>
            <p className="font-semibold text-slate-900 text-sm leading-tight">{rec.sku}</p>
            <p className="text-xs text-slate-500 mt-0.5">{rec.productName}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-bold text-red-600">{formatCurrency(rec.revenueAtRisk)} at risk</p>
          <p className="text-xs text-slate-400 mt-0.5">{Number(rec.daysToDepletion).toFixed(1)} days to stockout</p>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-100 shadow-inner">
        <p className="text-sm font-bold text-slate-800">{rec.recommendedAction}</p>
        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{rec.reasoningSummary}</p>
      </div>

      {citations.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          {expanded ? 'Hide Evidence' : 'View Data Evidence'} ({citations.length})
        </button>
      )}

      {expanded && (
        <div className="space-y-1.5 animate-in slide-in-from-top-1 duration-200">
          {citations.map((c: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-[10px] text-slate-600 bg-indigo-50/50 px-3 py-2 rounded-lg border border-indigo-100/50 font-mono">
              <span className="text-indigo-400">📎</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-1 border-t border-slate-100/50">
        <div className="flex items-center gap-2.5">
          <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: `${(rec.confidenceScore || 0) * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            {Math.round((rec.confidenceScore || 0) * 100)}% Confidence
          </span>
        </div>

        {showActions && (
          <div className="flex items-center gap-2">
            <button onClick={onSnooze} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors" title="Snooze">
              <Clock className="w-4 h-4" />
            </button>
            <button onClick={onDismiss} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-red-500 hover:bg-red-50 transition-colors">
              Dismiss
            </button>
            <button onClick={onApprove} className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm shadow-emerald-200 transition-all active:scale-95 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              Approve
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
