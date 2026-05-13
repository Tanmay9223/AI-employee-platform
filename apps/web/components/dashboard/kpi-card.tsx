import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KpiCardProps {
  label: string
  value: string
  icon: LucideIcon
  trend: string
  trendUp: boolean
  source: string
  alert?: boolean
}

export function KpiCard({ label, value, icon: Icon, trend, trendUp, source, alert }: KpiCardProps) {
  return (
    <div className={cn('bg-white rounded-xl border p-5 space-y-3', alert ? 'border-red-200' : 'border-slate-200')}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</span>
        <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', alert ? 'bg-red-50' : 'bg-indigo-50')}>
          <Icon className={cn('w-4 h-4', alert ? 'text-red-500' : 'text-indigo-600')} />
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <div className="flex items-center gap-1.5 mt-1">
          {trendUp
            ? <TrendingUp className="w-3 h-3 text-emerald-500" />
            : <TrendingDown className="w-3 h-3 text-red-400" />
          }
          <span className={cn('text-xs font-medium', trendUp ? 'text-emerald-600' : 'text-red-500')}>
            {trend}
          </span>
        </div>
      </div>

      <div className="pt-1 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          Source: <span className="font-medium text-slate-500">{source}</span>
        </span>
      </div>
    </div>
  )
}
