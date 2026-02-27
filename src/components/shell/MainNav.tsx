interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

interface MainNavProps {
  items: NavigationItem[]
  onItemClick?: (href: string) => void
}

export function MainNav({ items, onItemClick }: MainNavProps) {
  return (
    <nav className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
              Stack
            </span>
            <span className="font-semibold text-orange-500 dark:text-orange-400 text-sm">
              Scale
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 px-4 py-6 space-y-2">
        {items.map((item) => (
          <button
            key={item.href}
            onClick={() => onItemClick?.(item.href)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              item.isActive
                ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border-l-4 border-transparent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Footer info */}
      <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © 2025 Stack and Scale
        </p>
      </div>
    </nav>
  )
}
