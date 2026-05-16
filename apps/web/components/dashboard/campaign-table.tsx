'use client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { formatCurrency } from '@/lib/utils'

export function CampaignTable({ merchantId }: { merchantId: string }) {
  const { data: campaigns } = useQuery({
    queryKey: ['campaigns', merchantId],
    queryFn: () => api.getCampaigns(merchantId),
  })

  return (
    <div className="bg-white rounded-xl border border-slate-200">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Campaign Performance</h3>
        <span className="text-xs text-slate-400">meta_ads + klaviyo → unified_campaigns</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              {['Campaign', 'Channel', 'Spend', 'Revenue', 'ROAS', 'Status'].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {((campaigns as any)?.data || []).map((c: { id: string; name: string; sourceConnector: string; spendAmount: number; conversionValue: number; revenueAttributed: number; roas: number; status: string }) => (
              <tr key={c.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 font-medium text-slate-900">{c.name}</td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                    {c.sourceConnector === 'meta_ads' ? '📘 Meta' : '📧 Klaviyo'}
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-700">{formatCurrency(c.spendAmount)}</td>
                <td className="px-5 py-3 text-slate-700">{formatCurrency(c.conversionValue || c.revenueAttributed)}</td>
                <td className="px-5 py-3">
                  <span className={`font-semibold ${Number(c.roas) >= 3 ? 'text-emerald-600' : 'text-slate-700'}`}>
                    {c.roas ? `${Number(c.roas).toFixed(1)}x` : '—'}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
