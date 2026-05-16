'use client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InventoryWidget({ merchantId }: { merchantId: string }) {
  const { data: inventory } = useQuery({
    queryKey: ['inventory', merchantId],
    queryFn: () => api.getInventory(merchantId),
  })

  const inventoryItems = (inventory as any)?.data || []
  const lowStock = inventoryItems.filter((i: { isLowStock: boolean }) => i.isLowStock)

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-900">Inventory Alerts</h3>
        {lowStock.length > 0 && (
          <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">
            {lowStock.length} low
          </span>
        )}
      </div>

      <div className="space-y-2">
        {lowStock.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-8">All inventory levels healthy ✓</p>
        ) : (
          lowStock.slice(0, 6).map((item: { id: string; isCritical: boolean; sku: string; quantityAvailable: number }) => (
            <div key={item.id} className={cn(
              'flex items-center justify-between p-2.5 rounded-lg border text-sm',
              item.isCritical ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'
            )}>
              <div className="flex items-center gap-2 min-w-0">
                <AlertTriangle className={cn('w-3.5 h-3.5 flex-shrink-0', item.isCritical ? 'text-red-500' : 'text-amber-500')} />
                <span className="font-medium text-slate-700 truncate">{item.sku}</span>
              </div>
              <span className={cn('font-bold flex-shrink-0 ml-2', item.isCritical ? 'text-red-600' : 'text-amber-600')}>
                {item.quantityAvailable} left
              </span>
            </div>
          ))
        )}
      </div>

      <p className="text-xs text-slate-400 mt-3">Source: shopify → unified_inventory</p>
    </div>
  )
}
