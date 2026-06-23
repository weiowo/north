'use client'

import { useState } from 'react'
import type { Tab } from '@/lib/types'
import TopBar from '@/components/TopBar'
import BottomNav from '@/components/BottomNav'
import ItineraryTab from '@/components/tabs/ItineraryTab'
import PackingTab from '@/components/tabs/PackingTab'
import ExpensesTab from '@/components/tabs/ExpensesTab'
import InfoTab from '@/components/tabs/InfoTab'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary')
  const [activeDay, setActiveDay] = useState(1)

  return (
    <div className="flex flex-col min-h-screen lg:h-screen">

      {/* 主要區域：sidebar + 右側可捲動內容 */}
      <div className="flex flex-col flex-1 lg:flex-row lg:overflow-hidden">
        <BottomNav active={activeTab} onChange={setActiveTab} />

        <div className="flex flex-col flex-1 min-w-0 lg:overflow-y-auto">
          <TopBar />

          <main className="flex-1 px-4 pt-4 pb-8 lg:pb-10 lg:px-10 lg:pt-8 w-full">
            {activeTab === 'itinerary' && (
              <ItineraryTab activeDay={activeDay} onDayChange={setActiveDay} />
            )}
            {activeTab === 'packing' && <PackingTab />}
            {activeTab === 'expenses' && <ExpensesTab />}
            {activeTab === 'info' && <InfoTab />}
          </main>
        </div>
      </div>

      {/* Footer：獨立橫條，永遠在最底 */}
      <footer
        className="shrink-0 py-3 pb-28 lg:pb-3 text-center text-[14px] border-t"
        style={{
          color: '#3A4B63',
          background: '#070B16',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        © 2026 北歐冒險之旅 · All rights reserved
      </footer>

    </div>
  )
}
