'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Plug, MessageSquare, BellRing, Table2, Zap, ShoppingCart, Megaphone, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSession } from '@/components/providers/session-provider'

const navItems = [
  { href: '/dashboard',         label: 'Dashboard',       icon: LayoutDashboard },
  { href: '/connectors',        label: 'Connectors',      icon: Plug },
  { href: '/chat',              label: 'AI Chat',         icon: MessageSquare },
  { href: '/recommendations',   label: 'Recommendations', icon: BellRing },
  { href: '/orders',            label: 'Orders',          icon: ShoppingCart },
  { href: '/inventory',         label: 'Inventory',       icon: Table2 },
  { href: '/campaigns',         label: 'Campaigns',       icon: Megaphone },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const session = useSession()
  const merchantName = session?.merchantName || 'Demo Brand Co.'

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <aside className="w-60 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">AI Employee</p>
            <p className="text-xs text-slate-500">{merchantName}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {(merchantName[0] || 'D').toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-slate-900 truncate">{merchantName}</p>
            <p className="text-xs text-slate-500">Free Plan</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          Log out
        </button>
      </div>
    </aside>
  )
}
