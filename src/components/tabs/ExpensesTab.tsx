'use client'

import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import type { Expense } from '@/lib/types'
import AddExpenseModal from '@/components/AddExpenseModal'

const TRIP_ID = 'nordic-2026'

export default function ExpensesTab() {
  const [expenses, setExpenses]   = useState<Expense[]>([])
  const [loading, setLoading]     = useState(true)
  const [showModal, setShowModal] = useState(false)

  const fetchExpenses = useCallback(async () => {
    const { data } = await supabase
      .from('expenses')
      .select('*')
      .eq('trip_id', TRIP_ID)
      .order('created_at', { ascending: false })
    if (data) setExpenses(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchExpenses()

    const channel = supabase
      .channel('expenses-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'expenses' }, fetchExpenses)
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [fetchExpenses])

  async function deleteExpense(id: string) {
    await supabase.from('expenses').delete().eq('id', id)
    setExpenses((prev) => prev.filter((e) => e.id !== id))
  }

  const totals: Record<string, number> = {}
  expenses.forEach((e) => { totals[e.currency] = (totals[e.currency] ?? 0) + Number(e.amount) })

  return (
    <div>
      <div className="text-[18px] font-[560] mb-2.5" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
        花費記錄
      </div>

      {/* totals */}
      {Object.keys(totals).length > 0 && (
        <div className="flex flex-wrap gap-2.5 mb-4">
          {Object.entries(totals).map(([cur, amt]) => (
            <div
              key={cur}
              className="rounded-[12px] border px-3.5 py-2.5 min-w-[96px]"
              style={{
                background: 'linear-gradient(135deg, rgba(45,226,230,0.14), rgba(160,108,255,0.14))',
                borderColor: 'rgba(255,255,255,0.10)',
              }}
            >
              <div className="text-[14px] tracking-[0.08em]" style={{ color: '#2DE2E6' }}>
                {cur} 總計
              </div>
              <div
                className="text-[16px] font-semibold"
                style={{ fontFamily: 'var(--font-jetbrains), monospace' }}
              >
                {amt.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* list */}
      {loading ? (
        <div className="text-center py-10 text-mist text-[14px]">載入中…</div>
      ) : expenses.length === 0 ? (
        <div
          className="text-center py-9 px-4 text-[13.5px] text-mist rounded-[14px] border border-dashed"
          style={{ borderColor: 'rgba(255,255,255,0.10)' }}
        >
          <span
            className="block text-[16px] text-ink-soft mb-1"
                     >
            還沒有花費記錄
          </span>
          按右下角 + 記一筆
        </div>
      ) : (
        <div
          className="rounded-[16px] border overflow-hidden"
          style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)' }}
        >
          {expenses.map((e, idx) => (
            <div
              key={e.id}
              className="flex items-center gap-2.5 px-4 py-3"
              style={{ borderBottom: idx < expenses.length - 1 ? '1px solid rgba(255,255,255,0.10)' : undefined }}
            >
              <div className="flex-1 min-w-0">
                <div className="text-[14px] text-ink truncate">{e.desc}</div>
                <div className="text-[14px] text-mist">
                  {e.payer && `${e.payer} 先付 · `}{e.day ? `Day ${e.day}` : ''}
                </div>
              </div>
              <div
                className="text-[14px] font-semibold shrink-0"
                style={{ fontFamily: 'var(--font-jetbrains), monospace', color: '#FFC857' }}
              >
                {e.currency} {Number(e.amount).toLocaleString()}
              </div>
              <button
                onClick={() => deleteExpense(e.id)}
                className="text-[16px] text-mist cursor-pointer bg-none border-none p-1 hover:text-danger transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed right-[18px] bottom-[88px] w-[54px] h-[54px] rounded-full flex items-center justify-center text-[26px] border-none cursor-pointer z-30 lg:bottom-[40px] lg:right-[40px]"
        style={{
          background: 'linear-gradient(135deg, #2DE2E6, #A06CFF)',
          color: '#06121A',
          boxShadow: '0 10px 28px rgba(160,108,255,0.5), 0 0 18px rgba(45,226,230,0.45)',
        }}
      >
        +
      </button>

      {showModal && (
        <AddExpenseModal
          onClose={() => setShowModal(false)}
          onAdded={fetchExpenses}
        />
      )}
    </div>
  )
}
