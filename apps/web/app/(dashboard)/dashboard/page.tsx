'use client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useSession } from '@/components/providers/session-provider'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { KpiCard } from '@/components/dashboard/kpi-card'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { CampaignTable } from '@/components/dashboard/campaign-table'
import { InventoryWidget } from '@/components/dashboard/inventory-widget'
import { TrendingUp, ShoppingCart, Users, AlertTriangle } from 'lucide-react'

export default function DashboardPage() {
  const session = useSession()
  const merchantId = session?.merchantId || ''

  const { data: summary, isLoading } = useQuery({
    queryKey: ['summary', merchantId],
    queryFn: () => api.getSummary(merchantId),
    enabled: !!merchantId,
  })

  const { data: recommendations } = useQuery({
    queryKey: ['recommendations', merchantId],
    queryFn: () => api.getRecommendations(merchantId, 'pending'),
    enabled: !!merchantId,
  })

  if (isLoading) return <div className="p-8 text-slate-400">Loading Dashboard...</div>

  return (
    <div className="space-y-6">
      {/* Pending recommendations alert */}
      {recommendations?.length > 0 && (
        <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-amber-800">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-600" />
          <p className="text-sm">
            <span className="font-semibold">{recommendations.length} AI recommendation{recommendations.length > 1 ? 's' : ''}</span>
            {' '}require your attention.{' '}
            <a href="/recommendations" className="underline font-medium">Review now →</a>
          </p>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          label="Revenue (30d)"
          value={formatCurrency(summary?.revenue30d)}
          icon={TrendingUp}
          trend="+12.4%"
          trendUp={true}
          source="shopify"
        />
        <KpiCard
          label="Orders (30d)"
          value={formatNumber(summary?.orders30d)}
          icon={ShoppingCart}
          trend="+8.1%"
          trendUp={true}
          source="shopify"
        />
        <KpiCard
          label="Customers"
          value={formatNumber(summary?.totalCustomers)}
          icon={Users}
          trend="+3.2%"
          trendUp={true}
          source="shopify"
        />
        <KpiCard
          label="Low Stock SKUs"
          value={String(summary?.lowStockSkus || 0)}
          icon={AlertTriangle}
          trend="Action needed"
          trendUp={false}
          source="shopify"
          alert={summary?.lowStockSkus > 0}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart merchantId={merchantId} />
        </div>
        <div>
          <InventoryWidget merchantId={merchantId} />
        </div>
      </div>

      {/* Campaigns Table */}
      <CampaignTable merchantId={merchantId} />
    </div>
  )
}
