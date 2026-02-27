'use client'

import { useState } from 'react'
import { MainNav } from './MainNav'

interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  onNavigate?: (href: string) => void
}

export function AppShell({
  children,
  navigationItems,
  onNavigate,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavClick = (href: string) => {
    onNavigate?.(href)
    setSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-slate-100 dark:bg-slate-900 transition-transform duration-200 lg:relative lg:transform-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <MainNav
          items={navigationItems}
          onItemClick={handleNavClick}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header with hamburger */}
        <div className="lg:hidden flex items-center gap-4 px-4 py-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6 text-slate-900 dark:text-slate-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="font-semibold text-slate-900 dark:text-slate-50">
            Stack and Scale
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <main className="bg-white dark:bg-slate-950">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
