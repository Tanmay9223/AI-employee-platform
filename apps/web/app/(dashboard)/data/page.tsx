'use client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useSession } from '@/components/providers/session-provider'
import { useState } from 'react'
import { formatCurrency, cn } from '@/lib/utils'

export default function DataPage() {
  const session = useSession()
  const merchantId = session?.merchantId || ''
  const [activeTab, setActiveTab] = useState<'inventory' | 'campaigns'>('inventory')

  const { data: inventory, isLoading: invLoading } = useQuery({
    queryKey: ['inventory', merchantId],
    queryFn: () => api.getInventory(merchantId),
    enabled: !!merchantId,
  })

  const { data: campaigns, isLoading: campLoading } = useQuery({
    queryKey: ['campaigns', merchantId],
    queryFn: () => api.getCampaigns(merchantId),
    enabled: !!merchantId,
  })

  return (
    <div className="space-y-4">
      <div className="flex gap-1 bg-slate-100 rounded-lg p-1 w-fit border border-slate-200">
        <button
          onClick={() => setActiveTab('inventory')}
          className={cn(
            'px-4 py-1.5 rounded-md text-sm font-medium transition-all',
            activeTab === 'inventory' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          )}
        >
          Inventory
        </button>
        <button
          onClick={() => setActiveTab('campaigns')}
          className={cn(
            'px-4 py-1.5 rounded-md text-sm font-medium transition-all',
            activeTab === 'campaigns' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          )}
        >
          Campaigns
        </button>
      </div>

      {activeTab === 'inventory' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">Source: shopify → unified_inventory</span>
            {invLoading && <span className="text-[10px] text-indigo-500 animate-pulse font-bold">Refreshing...</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30">
                  {['SKU', 'Product', 'Available', 'Committed', 'Unit Price', 'Status'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(inventory || []).map((inv: any) => (
                  <tr key={inv.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-slate-500">{inv.sku}</td>
                    <td className="px-5 py-3">
                      <p className="font-semibold text-slate-900">{inv.productName}</p>
                      <p className="text-[10px] text-slate-400">{inv.variantName}</p>
                    </td>
                    <td className="px-5 py-3 font-bold text-slate-900">{inv.quantityAvailable}</td>
                    <td className="px-5 py-3 text-slate-400">{inv.quantityCommitted}</td>
                    <td className="px-5 py-3 text-slate-700 font-medium">{formatCurrency(inv.unitPrice)}</td>
                    <td className="px-5 py-3">
                      <span className={cn(
                        'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight',
                        inv.isCritical ? 'bg-red-100 text-red-700' : inv.isLowStock ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                      )}>
                        {inv.isCritical ? 'Critical' : inv.isLowStock ? 'Low' : 'Healthy'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'campaigns' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">Source: meta_ads + klaviyo → unified_campaigns</span>
            {campLoading && <span className="text-[10px] text-indigo-500 animate-pulse font-bold">Refreshing...</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30">
                  {['Name', 'Connector', 'Spend', 'Revenue', 'ROAS', 'Date Range'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(campaigns || []).map((c: any) => (
                  <tr key={c.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-semibold text-slate-900">{c.name}</td>
                    <td className="px-5 py-3">
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                        {c.sourceConnector}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-700 font-medium">{formatCurrency(c.spendAmount)}</td>
                    <td className="px-5 py-3 text-slate-700 font-medium">{formatCurrency(c.conversionValue || c.revenueAttributed)}</td>
                    <td className="px-5 py-3">
                      <span className="font-bold text-slate-900">{c.roas ? `${Number(c.roas).toFixed(1)}x` : '—'}</span>
                    </td>
                    <td className="px-5 py-3 text-[10px] text-slate-400 font-medium">
                      {new Date(c.periodStart).toLocaleDateString()} – {new Date(c.periodEnd).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
