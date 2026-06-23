'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { TRIP, tripDayCount } from '@/lib/data'

const CURRENCIES: { code: string; label: string }[] = [
  { code: 'NOK', label: 'NOK（挪威）' },
  { code: 'SEK', label: 'SEK（瑞典）' },
  { code: 'DKK', label: 'DKK（丹麥）' },
  { code: 'EUR', label: 'EUR（歐元區）' },
  { code: 'GBP', label: 'GBP（英國）' },
  { code: 'USD', label: 'USD（美國）' },
  { code: 'TWD', label: 'TWD（台灣）' },
]

function dayLabel(dayNum: number): string {
  const d = new Date(TRIP.start)
  d.setDate(d.getDate() + dayNum - 1)
  const month = d.getMonth() + 1
  const date = d.getDate()
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  const weekday = weekdays[d.getDay()]
  return `第 ${dayNum} 天 · ${month}/${date}（${weekday}）`
}
const TRIP_ID = 'nordic-2026'

interface Props {
  onClose: () => void
  onAdded: () => void
}

export default function AddExpenseModal({ onClose, onAdded }: Props) {
  const [desc, setDesc]         = useState('')
  const [amount, setAmount]     = useState('')
  const [currency, setCurrency] = useState('NOK')
  const [payer, setPayer]       = useState('')
  const [day, setDay]           = useState('')
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState('')

  async function handleSave() {
    if (!desc.trim() || !amount) { setError('請填寫項目和金額'); return }
    setSaving(true)
    setError('')

    const { error: err } = await supabase.from('expenses').insert({
      trip_id: TRIP_ID,
      desc: desc.trim(),
      amount: Number(amount),
      currency,
      payer: payer.trim(),
      day: day ? Number(day) : null,
    })

    setSaving(false)
    if (err) { setError('儲存失敗，請再試一次'); return }
    onAdded()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      style={{ background: 'rgba(2,5,12,0.65)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-[520px] rounded-t-[20px] sm:rounded-[20px] border p-5 pb-[calc(20px+env(safe-area-inset-bottom))] sm:pb-5 max-h-[88vh] overflow-y-auto"
        style={{
          background: '#101A2C',
          borderColor: 'rgba(255,255,255,0.10)',
          boxShadow: '0 -10px 40px rgba(45,226,230,0.08)',
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-[18px] font-[680]">
            記一筆花費
          </div>
          <button onClick={onClose} className="text-[20px] text-mist cursor-pointer bg-none border-none">✕</button>
        </div>

        <Field label="項目">
          <input
            className="w-full px-3 py-2.5 rounded-[10px] text-[14px] border bg-bg-elev-2 text-ink focus:outline-none focus:border-neon-cyan"
            style={{ borderColor: 'rgba(255,255,255,0.10)' }}
            placeholder="例如：晚餐"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Field>

        <div className="flex gap-2.5">
          <Field label="金額" className="flex-1">
            <input
              type="number"
              inputMode="decimal"
              className="w-full px-3 py-2.5 rounded-[10px] text-[14px] border bg-bg-elev-2 text-ink focus:outline-none focus:border-neon-cyan"
              style={{ borderColor: 'rgba(255,255,255,0.10)' }}
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Field>
          <Field label="幣別" className="flex-1">
            <select
              className="w-full px-3 py-2.5 rounded-[10px] text-[14px] border bg-bg-elev-2 text-ink focus:outline-none focus:border-neon-cyan"
              style={{ borderColor: 'rgba(255,255,255,0.10)' }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
            </select>
          </Field>
        </div>

        <div className="flex gap-2.5">
          <Field label="誰先付的" className="flex-1">
            <select
              className="w-full px-3 py-2.5 rounded-[10px] text-[14px] border bg-bg-elev-2 text-ink focus:outline-none focus:border-neon-cyan"
              style={{ borderColor: 'rgba(255,255,255,0.10)' }}
              value={payer}
              onChange={(e) => setPayer(e.target.value)}
            >
              <option value="">—</option>
              {TRIP.members.map((m) => <option key={m}>{m}</option>)}
            </select>
          </Field>
          <Field label="第幾天（選填）" className="flex-1">
            <select
              className="w-full px-3 py-2.5 rounded-[10px] text-[14px] border bg-bg-elev-2 text-ink focus:outline-none focus:border-neon-cyan"
              style={{ borderColor: 'rgba(255,255,255,0.10)' }}
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="">—</option>
              {Array.from({ length: tripDayCount() }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{dayLabel(n)}</option>
              ))}
            </select>
          </Field>
        </div>

        {error && <p className="text-[14px] text-danger mb-3">{error}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 rounded-[11px] text-[14px] font-semibold cursor-pointer disabled:opacity-60"
          style={{
            background: 'linear-gradient(135deg, #2DE2E6, #A06CFF)',
            color: '#06121A',
            boxShadow: '0 6px 22px rgba(160,108,255,0.35)',
          }}
        >
          {saving ? '儲存中…' : '記錄這筆'}
        </button>
      </div>
    </div>
  )
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-3 ${className ?? ''}`}>
      <label className="block text-[14px] text-mist mb-1.5 tracking-[0.03em]">{label}</label>
      {children}
    </div>
  )
}
