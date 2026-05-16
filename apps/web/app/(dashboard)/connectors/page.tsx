'use client'
import { useState } from 'react'
import { CheckCircle, Clock, AlertCircle, Plug, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

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
  const [editing, setEditing] = useState<string | null>(null)
  const [webhookEnabled, setWebhookEnabled] = useState(false)
  const [histSyncStart, setHistSyncStart] = useState('')
  const [histSyncEnd, setHistSyncEnd] = useState('')
  const [histSyncing, setHistSyncing] = useState(false)

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

  const toggleWebhook = async () => {
    const newState = !webhookEnabled
    setWebhookEnabled(newState)
    await api.toggleShopifyWebhooks(newState)
  }

  const handleHistoricalSync = async () => {
    if (!histSyncStart || !histSyncEnd) return
    setHistSyncing(true)
    await api.syncHistoricalData(histSyncStart, histSyncEnd)
    setHistSyncing(false)
    alert('Historical sync initiated! Data is being chunked and downloaded in the background.')
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
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditing(editing === template.id ? null : template.id)
                          if (state.config?.webhooksEnabled) setWebhookEnabled(true)
                        }}
                        className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                      >
                        {editing === template.id ? 'Close' : 'Edit'}
                      </button>
                      <button
                        onClick={() => handleSync(template.id)}
                        disabled={syncing === template.id}
                        className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                      >
                        {syncing === template.id ? 'Syncing...' : 'Sync Now'}
                      </button>
                    </div>
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

            {/* Edit / Configuration Pane */}
            {isConnected && editing === template.id && template.id === 'shopify' && (
              <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-6 animate-in slide-in-from-top-2">
                
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Live Order Sync (Webhooks)</h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md">Automatically sync new orders via Shopify webhooks instead of hourly polling. This improves performance and provides real-time AI context.</p>
                  </div>
                  <button 
                    onClick={toggleWebhook}
                    className={cn('w-12 h-6 rounded-full transition-colors relative', webhookEnabled ? 'bg-indigo-600' : 'bg-slate-300')}
                  >
                    <span className={cn('absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform', webhookEnabled ? 'translate-x-6' : 'translate-x-0')} />
                  </button>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Migrate Historical Data</h4>
                  <p className="text-xs text-slate-500 mb-4 max-w-md">
                    First-time syncs only fetch the last 7 days to preserve memory. Use this tool to migrate older data. The system will automatically chunk large queries to prevent out-of-memory errors.
                  </p>
                  
                  <div className="flex items-end gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase">Start Date</label>
                      <input 
                        type="date" 
                        value={histSyncStart}
                        onChange={e => setHistSyncStart(e.target.value)}
                        className="text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase">End Date</label>
                      <input 
                        type="date" 
                        value={histSyncEnd}
                        onChange={e => setHistSyncEnd(e.target.value)}
                        className="text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <button 
                      onClick={handleHistoricalSync}
                      disabled={histSyncing || !histSyncStart || !histSyncEnd}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                    >
                      {histSyncing ? 'Syncing chunks...' : 'Start Migration'}
                    </button>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => {
                      const end = new Date()
                      const start = new Date()
                      start.setMonth(start.getMonth() - 1)
                      setHistSyncEnd(end.toISOString().split('T')[0])
                      setHistSyncStart(start.toISOString().split('T')[0])
                    }} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 hover:bg-slate-50 font-semibold uppercase tracking-tight">Previous Month</button>
                    <button onClick={() => {
                      const end = new Date()
                      const start = new Date()
                      start.setFullYear(start.getFullYear() - 1)
                      setHistSyncEnd(end.toISOString().split('T')[0])
                      setHistSyncStart(start.toISOString().split('T')[0])
                    }} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 hover:bg-slate-50 font-semibold uppercase tracking-tight">Previous Year</button>
                  </div>
                </div>

              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
