'use client'
import { usePathname } from 'next/navigation'
import { Bell } from 'lucide-react'

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard':       { title: 'Dashboard',       subtitle: 'Business overview' },
  '/connectors':      { title: 'Connectors',      subtitle: 'Manage your data sources' },
  '/chat':            { title: 'AI Chat',          subtitle: 'Ask questions about your data' },
  '/recommendations': { title: 'Recommendations', subtitle: 'AI-generated action items' },
  '/data':            { title: 'Data Explorer',   subtitle: 'Raw unified data' },
}

export function TopBar() {
  const pathname = usePathname()
  const page = pageTitles[pathname] || { title: 'AI Employee', subtitle: '' }

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-base font-semibold text-slate-900">{page.title}</h1>
        <p className="text-xs text-slate-500">{page.subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
          Data synced just now
        </span>
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
