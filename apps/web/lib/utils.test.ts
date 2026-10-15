import { cn, formatCurrency, formatNumber, formatPercent, getRiskColor } from './utils'

describe('utils', () => {
  describe('cn', () => {
    it('merges tailwind classes correctly', () => {
      expect(cn('p-2', 'p-4')).toBe('p-4')
      expect(cn('p-2', { 'bg-red-500': true, 'bg-blue-500': false })).toBe('p-2 bg-red-500')
      expect(cn('text-sm', ['font-bold', 'text-black'])).toBe('text-sm font-bold text-black')
      expect(cn('px-2 py-1', 'p-2')).toBe('p-2') // tailwind-merge resolves px-2 py-1 and p-2 to just p-2
    })
  })

  describe('formatCurrency', () => {
    it('formats numbers as USD currency without fraction digits', () => {
      expect(formatCurrency(1234)).toBe('$1,234')
      expect(formatCurrency(1234.56)).toBe('$1,235') // Rounding
      expect(formatCurrency(-500)).toBe('-$500')
    })

    it('formats string numbers correctly', () => {
      expect(formatCurrency('1234')).toBe('$1,234')
      expect(formatCurrency('-500.5')).toBe('-$501')
    })

    it('handles zero correctly', () => {
      expect(formatCurrency(0)).toBe('$0')
      expect(formatCurrency('0')).toBe('$0')
    })

    it('handles null or empty values gracefully', () => {
      expect(formatCurrency(null)).toBe('$0')
      expect(formatCurrency('')).toBe('$0')
    })
  })

  describe('formatNumber', () => {
    it('formats numbers with commas', () => {
      expect(formatNumber(1234567)).toBe('1,234,567')
      expect(formatNumber(1000.5)).toBe('1,000.5')
    })

    it('formats string numbers correctly', () => {
      expect(formatNumber('1234')).toBe('1,234')
    })

    it('handles zero correctly', () => {
      expect(formatNumber(0)).toBe('0')
      expect(formatNumber('0')).toBe('0')
    })

    it('handles null or empty values gracefully', () => {
      expect(formatNumber(null)).toBe('0')
      expect(formatNumber('')).toBe('0')
    })
  })

  describe('formatPercent', () => {
    it('formats percentages with one decimal place', () => {
      expect(formatPercent(12.34)).toBe('12.3%')
      expect(formatPercent(50)).toBe('50.0%')
      expect(formatPercent(0.05)).toBe('0.1%')
    })

    it('formats string percentages correctly', () => {
      expect(formatPercent('12.34')).toBe('12.3%')
    })

    it('handles zero correctly', () => {
      expect(formatPercent(0)).toBe('0.0%')
      expect(formatPercent('0')).toBe('0.0%')
    })

    it('handles null or empty values gracefully', () => {
      expect(formatPercent(null)).toBe('0.0%')
      expect(formatPercent('')).toBe('0.0%')
    })
  })

  describe('getRiskColor', () => {
    it('returns the correct classes for CRITICAL risk', () => {
      expect(getRiskColor('CRITICAL')).toBe('text-red-500 bg-red-50 border-red-200')
    })

    it('returns the correct classes for HIGH risk', () => {
      expect(getRiskColor('HIGH')).toBe('text-orange-500 bg-orange-50 border-orange-200')
    })

    it('returns the correct classes for MEDIUM risk', () => {
      expect(getRiskColor('MEDIUM')).toBe('text-yellow-600 bg-yellow-50 border-yellow-200')
    })

    it('returns the default classes for unknown risks', () => {
      expect(getRiskColor('LOW')).toBe('text-slate-500 bg-slate-50 border-slate-200')
      expect(getRiskColor('UNKNOWN')).toBe('text-slate-500 bg-slate-50 border-slate-200')
      expect(getRiskColor('')).toBe('text-slate-500 bg-slate-50 border-slate-200')
    })
  })
})
