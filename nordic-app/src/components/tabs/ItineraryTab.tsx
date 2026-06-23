'use client'

import { ITINERARY, STAYS, DRIVE_SUMMARY, dayDate, tripDayCount } from '@/lib/data'

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export default function ItineraryTab({ activeDay, onDayChange }: Props) {
  const total = tripDayCount()
  const items = ITINERARY.filter((it) => it.day === activeDay)
  const drive = DRIVE_SUMMARY[activeDay]
  const stay = STAYS[activeDay]

  return (
    <div>
      <div className="text-[18px] font-[560] mb-2.5 flex items-center gap-2" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
        行程時間軸
      </div>

      {/* day chips */}
      <div className="day-scroll flex gap-2 pb-2.5 px-0.5">
        {Array.from({ length: total }, (_, idx) => {
          const day = idx + 1
          const isActive = day === activeDay
          return (
            <button
              key={day}
              onClick={() => onDayChange(day)}
              className="shrink-0 px-3.5 py-2.5 rounded-[12px] border text-left min-w-[64px] cursor-pointer transition-all"
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, rgba(45,226,230,0.16), rgba(160,108,255,0.16))'
                  : '#101A2C',
                borderColor: isActive ? '#2DE2E6' : 'rgba(255,255,255,0.10)',
                boxShadow: isActive ? '0 0 18px rgba(45,226,230,0.45)' : undefined,
              }}
            >
              <div
                className="text-[10px] tracking-[0.08em] uppercase"
                style={{ color: isActive ? '#2DE2E6' : '#728099' }}
              >
                {dayDate(day)}
              </div>
              <div
                className="text-[18px] font-[680] leading-tight"
                style={{ fontFamily: 'var(--font-fraunces), serif', color: isActive ? '#fff' : '#EAF4FF' }}
              >
                D{day}
              </div>
            </button>
          )
        })}
      </div>

      {/* drive badge */}
      {drive && (
        <div
          className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full border mb-3"
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            color: '#FFC857',
            background: 'rgba(255,200,87,0.08)',
            borderColor: 'rgba(255,200,87,0.25)',
          }}
        >
          🚗 全天車程約 {drive}
        </div>
      )}

      {/* timeline */}
      {items.length > 0 ? (
        <div
          className="relative pl-[26px]"
          style={{
            ['--timeline-line' as string]: '1px',
          }}
        >
          {/* vertical line */}
          <div
            className="absolute left-[9px] top-1.5 bottom-1.5 w-[2px] rounded-[2px]"
            style={{
              background: 'linear-gradient(180deg, #2DE2E6, #A06CFF, #FF5DA2)',
              opacity: 0.7,
              boxShadow: '0 0 10px rgba(45,226,230,0.4)',
            }}
          />

          {items.map((it) => (
            <div key={it.id} className="relative mb-3.5">
              {/* dot */}
              <div
                className="absolute w-[10px] h-[10px] rounded-full"
                style={{
                  left: '-22px',
                  top: '18px',
                  background: '#070B16',
                  border: '2px solid #2DE2E6',
                  zIndex: 1,
                  boxShadow: '0 0 10px rgba(45,226,230,0.7)',
                }}
              />

              <div
                className="rounded-[14px] border p-[13px_14px]"
                style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)' }}
              >
                {it.time && (
                  <div
                    className="text-[12px] font-semibold"
                    style={{ fontFamily: 'var(--font-jetbrains), monospace', color: '#FFC857' }}
                  >
                    {it.time}
                  </div>
                )}
                <div className="text-[15px] font-semibold mt-0.5 mb-0.5 text-ink">{it.title}</div>
                {it.location && (
                  <div className="flex items-center gap-1 text-[12.5px] text-mist">
                    📍{' '}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(it.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted"
                      style={{ color: '#2DE2E6', textDecorationColor: 'rgba(45,226,230,0.4)' }}
                    >
                      {it.location}
                    </a>
                  </div>
                )}
                {it.notes && (
                  <div className="text-[12.5px] text-ink-soft mt-1.5 whitespace-pre-wrap">{it.notes}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="text-center py-9 px-4 text-[13.5px] text-mist rounded-[14px] border border-dashed"
          style={{ borderColor: 'rgba(255,255,255,0.10)' }}
        >
          <span
            className="block text-[16px] text-ink-soft mb-1"
            style={{ fontFamily: 'var(--font-fraunces), serif' }}
          >
            這天還沒有安排
          </span>
          這天是自由活動時間
        </div>
      )}

      {/* stay card */}
      {stay && (
        <div
          className="mt-4 px-4 py-3.5 rounded-[14px] border"
          style={{
            background: 'linear-gradient(135deg, rgba(255,200,87,0.10), rgba(160,108,255,0.08))',
            borderColor: 'rgba(255,200,87,0.35)',
          }}
        >
          <div className="text-[11px] tracking-[0.08em] uppercase mb-1" style={{ color: '#FFC857' }}>
            {stay.icon} {stay.label}
          </div>
          <div
            className="text-[16px] font-[680] text-ink"
            style={{ fontFamily: 'var(--font-fraunces), serif' }}
          >
            {stay.name}
          </div>
          {stay.notes && (
            <div className="text-[12.5px] text-ink-soft mt-1 leading-relaxed">{stay.notes}</div>
          )}
          {!stay.isTransport && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[12px] hover:underline"
              style={{ color: '#FFC857' }}
            >
              在地圖上查看 →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
