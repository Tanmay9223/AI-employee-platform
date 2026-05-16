'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useSession } from '@/components/providers/session-provider'
import { useState } from 'react'
import { formatCurrency } from '@/lib/utils'

export default function CampaignsPage() {
  const session = useSession()
  const merchantId = session?.merchantId || ''
  const [filter, setFilter] = useState<'All' | 'Meta Ads' | 'Klaviyo'>('All')

  const { 
    data, 
    isLoading: campLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['campaigns', 'infinite', merchantId],
    queryFn: ({ pageParam }) => api.getCampaigns(merchantId, pageParam),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    enabled: !!merchantId,
  })

  const campaigns = data?.pages.flatMap(page => page.data) || []

  const filteredCampaigns = (campaigns || []).filter((c: any) => {
    if (filter === 'All') return true
    if (filter === 'Meta Ads') return c.sourceConnector === 'meta_ads'
    if (filter === 'Klaviyo') return c.sourceConnector === 'klaviyo'
    return true
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Campaigns</h1>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="border border-slate-200 rounded-md px-3 py-1.5 text-sm bg-white text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="All">All Connectors</option>
          <option value="Meta Ads">Meta Ads</option>
          <option value="Klaviyo">Klaviyo</option>
        </select>
      </div>
      
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
              {filteredCampaigns.map((c: any) => (
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
      {hasNextPage && (
        <div className="flex justify-center py-4">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm disabled:opacity-50"
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More Campaigns'}
          </button>
        </div>
      )}
    </div>
  )
}
