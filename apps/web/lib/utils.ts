import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number | string | null): string {
  const num = Number(value || 0)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

export function formatNumber(value: number | string | null): string {
  return new Intl.NumberFormat('en-US').format(Number(value || 0))
}

export function formatPercent(value: number | string | null): string {
  return `${Number(value || 0).toFixed(1)}%`
}

export function getRiskColor(level: string): string {
  switch (level) {
    case 'CRITICAL': return 'text-red-500 bg-red-50 border-red-200'
    case 'HIGH':     return 'text-orange-500 bg-orange-50 border-orange-200'
    case 'MEDIUM':   return 'text-yellow-600 bg-yellow-50 border-yellow-200'
    default:         return 'text-slate-500 bg-slate-50 border-slate-200'
  }
}
