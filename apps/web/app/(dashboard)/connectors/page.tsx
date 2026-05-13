'use client'
import { useState } from 'react'
import { CheckCircle, Clock, AlertCircle, Plug, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const CONNECTOR_TEMPLATES = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Orders, customers, inventory, and refund data',
    color: 'bg-green-500',
    emoji: '🛍️',
    dataTypes: ['Orders', 'Customers', 'Inventory'],
  },
  {
    id: 'meta_ads',
    name: 'Meta Ads',
    description: 'Campaign spend, ROAS, impressions, and conversions',
    color: 'bg-blue-500',
    emoji: '📘',
    dataTypes: ['Campaigns', 'Spend', 'ROAS'],
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    description: 'Email campaigns, flow revenue, and open rates',
    color: 'bg-purple-500',
    emoji: '📧',
    dataTypes: ['Email Campaigns', 'Revenue Attribution'],
  },
]

const statusConfig = {
  active:      { icon: CheckCircle, label: 'Connected',     className: 'text-emerald-600 bg-emerald-50' },
  syncing:     { icon: Clock,       label: 'Syncing...',    className: 'text-blue-600 bg-blue-50' },
  error:       { icon: AlertCircle, label: 'Error',         className: 'text-red-600 bg-red-50' },
  disconnected:{ icon: Plug,        label: 'Not connected', className: 'text-slate-500 bg-slate-100' },
}

export default function ConnectorsPage() {
  const router = useRouter()
  const [syncing, setSyncing] = useState<string | null>(null)

  const { data: activeConnectors, isLoading } = useQuery({
    queryKey: ['connectors'],
    queryFn: async () => {
      const res = await fetch('/api/connectors')
      if (!res.ok) throw new Error('Failed to fetch')
      return res.json()
    }
  })

  const getConnectorState = (id: string) => {
    if (!activeConnectors) return null
    return activeConnectors.find((c: any) => c.connectorType === id)
  }

  const handleSync = (id: string) => {
    setSyncing(id)
    setTimeout(() => setSyncing(null), 2000)
  }

  const handleConnect = (id: string) => {
    router.push(`/connectors/${id}/auth`)
  }

  if (isLoading) {
    return <div className="p-8 text-slate-400 animate-pulse">Loading connectors...</div>
  }

  return (
    <div className="max-w-3xl space-y-4">
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 flex items-center justify-between">
        <p className="text-sm text-indigo-800">
          <span className="font-semibold">Connect your data sources.</span>{' '}
          Select a platform to securely connect and import your data.
        </p>
      </div>

      {CONNECTOR_TEMPLATES.map((template) => {
        const state = getConnectorState(template.id)
        const isConnected = !!state
        
        let statusKey = 'disconnected' as keyof typeof statusConfig
        if (syncing === template.id) statusKey = 'syncing'
        else if (isConnected) statusKey = state.status || 'active'
        
        const { icon: StatusIcon, label, className } = statusConfig[statusKey]

        return (
          <div key={template.id} className="bg-white rounded-xl border border-slate-200 p-5 transition-all hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-2xl', template.color, 'bg-opacity-10')}>
                  {template.emoji}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{template.name}</h3>
                    <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium', className)}>
                      <StatusIcon className="w-3 h-3" />
                      {label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">{template.description}</p>

                  <div className="flex gap-1.5 mt-2">
                    {template.dataTypes.map(dt => (
                      <span key={dt} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                        {dt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                {isConnected ? (
                  <>
                    <button
                      onClick={() => handleSync(template.id)}
                      disabled={syncing === template.id}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                    >
                      {syncing === template.id ? 'Syncing...' : 'Sync Now'}
                    </button>
                    <p className="text-xs text-slate-400 font-medium">Last sync: {state.lastSyncedAt ? new Date(state.lastSyncedAt).toLocaleString() : 'Just now'}</p>
                  </>
                ) : (
                  <button
                    onClick={() => handleConnect(template.id)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    Connect
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
