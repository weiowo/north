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
    <div className="flex flex-col min-h-screen lg:flex-row">
      <BottomNav active={activeTab} onChange={setActiveTab} />

      <div className="flex flex-col flex-1 min-w-0 lg:overflow-y-auto">
        <TopBar />

        <main
          className="flex-1 px-4 pt-4 pb-24 lg:pb-10 lg:px-10 lg:pt-8 w-full"
        >
          {activeTab === 'itinerary' && (
            <ItineraryTab activeDay={activeDay} onDayChange={setActiveDay} />
          )}
          {activeTab === 'packing' && <PackingTab />}
          {activeTab === 'expenses' && <ExpensesTab />}
          {activeTab === 'info' && <InfoTab />}
        </main>
      </div>
    </div>
  )
}
