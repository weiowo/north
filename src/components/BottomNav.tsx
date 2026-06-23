'use client'

import type { Tab } from '@/lib/types'

const TABS: { id: Tab; icon: string; label: string }[] = [
  { id: 'itinerary', icon: '🗺️', label: '行程' },
  { id: 'packing',   icon: '🎒', label: '清單' },
  { id: 'expenses',  icon: '💳', label: '花費' },
  { id: 'info',      icon: '📋', label: '資訊' },
]

interface Props {
  active: Tab
  onChange: (tab: Tab) => void
}

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex z-20 border-t lg:static lg:flex-col lg:w-[200px] lg:h-screen lg:border-t-0 lg:border-r lg:pt-6 lg:pb-4 lg:px-2.5 lg:gap-1"
      style={{
        background: '#0A1120',
        borderColor: 'rgba(255,255,255,0.10)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {TABS.map((t) => {
        const isActive = t.id === active
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className="flex-1 flex flex-col items-center gap-0.5 py-2.5 px-1 border-none cursor-pointer transition-colors lg:flex-row lg:justify-start lg:gap-2.5 lg:px-3 lg:py-2.5 lg:rounded-[10px] lg:flex-none"
            style={{
              background: isActive ? 'rgba(45,226,230,0.08)' : 'transparent',
              color: isActive ? '#EAF4FF' : '#728099',
            }}
          >
            <span
              className="text-[19px] leading-none"
              style={isActive ? { filter: 'drop-shadow(0 0 6px rgba(45,226,230,0.7))' } : {}}
            >
              {t.icon}
            </span>
            <span className="text-[10.5px] tracking-[0.02em] lg:text-[14px]">{t.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
