/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { KpiCard } from './kpi-card'
import { Activity } from 'lucide-react'

describe('KpiCard', () => {
  const defaultProps = {
    label: 'Total Revenue',
    value: '$10,000',
    icon: Activity,
    trend: '12%',
    trendUp: true,
    source: 'Stripe'
  }

  it('renders correctly with default props', () => {
    render(<KpiCard {...defaultProps} />)

    expect(screen.getByText('Total Revenue')).toBeInTheDocument()
    expect(screen.getByText('$10,000')).toBeInTheDocument()
    expect(screen.getByText('12%')).toBeInTheDocument()
    expect(screen.getByText('Stripe')).toBeInTheDocument()

    const trendSpan = screen.getByText('12%')
    expect(trendSpan).toHaveClass('text-emerald-600')
  })

  it('renders correctly with negative trend', () => {
    render(<KpiCard {...defaultProps} trendUp={false} trend="-5%" />)

    const trendSpan = screen.getByText('-5%')
    expect(trendSpan).toHaveClass('text-red-500')
  })

  it('applies alert styles when alert is true', () => {
    const { container } = render(<KpiCard {...defaultProps} alert={true} />)

    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('border-red-200')
    expect(card).not.toHaveClass('border-slate-200')
  })

  it('applies normal styles when alert is false/undefined', () => {
    const { container } = render(<KpiCard {...defaultProps} alert={false} />)

    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('border-slate-200')
    expect(card).not.toHaveClass('border-red-200')
  })
})
