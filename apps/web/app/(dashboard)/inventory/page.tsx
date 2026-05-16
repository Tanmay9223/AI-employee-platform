'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useSession } from '@/components/providers/session-provider'
import { formatCurrency, cn } from '@/lib/utils'

export default function InventoryPage() {
  const session = useSession()
  const merchantId = session?.merchantId || ''

  const { 
    data, 
    isLoading: invLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['inventory', 'infinite', merchantId],
    queryFn: ({ pageParam }) => api.getInventory(merchantId, pageParam),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    enabled: !!merchantId,
  })
  
  const inventory = data?.pages.flatMap(page => page.data) || []

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Inventory</h1>
      
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
      {hasNextPage && (
        <div className="flex justify-center py-4">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm disabled:opacity-50"
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More Inventory'}
          </button>
        </div>
      )}
    </div>
  )
}
