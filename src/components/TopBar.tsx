'use client'

import { TRIP, countdown, tripDayCount } from '@/lib/data'

export default function TopBar() {
  const { value, label } = countdown()
  const total = tripDayCount()
  const dates = `${TRIP.start} → ${TRIP.end} · 共 ${total} 天`

  return (
    <header
      className="relative px-[18px] pb-4 isolate lg:px-10 lg:pb-6 header-safe-top"
      style={{ background: '#070B16' }}
    >
      {/* aurora orbs — clipped so they don't bleed into other elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="animate-drift-a absolute w-[280px] h-[280px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #2DE2E6, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.5,
            mixBlendMode: 'screen',
            top: '-140px',
            left: '-60px',
          }}
        />
        <div
          className="animate-drift-b absolute w-[280px] h-[280px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #A06CFF, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.5,
            mixBlendMode: 'screen',
            top: '-120px',
            right: '-80px',
          }}
        />
      </div>

      {/* skyline */}
      <svg
        className="absolute left-0 right-0 bottom-0 h-[34px] w-full opacity-40 pointer-events-none"
        viewBox="0 0 400 34"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,34 0,20 18,6 34,22 50,10 70,24 90,14 110,26 130,16 150,28 170,12 190,24 210,8 230,22 250,16 270,28 290,14 310,24 330,10 350,22 370,16 400,26 400,34"
          fill="none"
          stroke="#5EEAF0"
          strokeWidth="1.4"
        />
      </svg>

      {/* top row */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1
            className="m-0 mb-1 text-[26px] font-[560] tracking-[0.2px]"
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              textShadow: '0 0 22px rgba(45,226,230,0.35)',
            }}
          >
            {TRIP.name}
          </h1>
          <div
            className="text-[14px] tracking-[0.06em]"
            style={{ color: '#9FE8E2', opacity: 0.9 }}
          >
            {dates}
          </div>
        </div>

        <div className="text-right shrink-0">
          <div
            className="text-[30px] font-[680] leading-none"
            style={{
              background: 'linear-gradient(90deg, #2DE2E6, #A06CFF)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(160,108,255,0.45))',
            }}
          >
            {value}
          </div>
          <div className="text-[14px] tracking-[0.12em] uppercase mt-0.5" style={{ color: '#8FA3BE' }}>
            {label}
          </div>
        </div>
      </div>

      {/* member chips */}
      <div className="relative z-10 flex gap-1.5 mt-3 flex-wrap">
        {TRIP.members.map((m) => (
          <span
            key={m}
            className="text-[14px] px-2.5 py-1 rounded-full border"
            style={{
              background: 'rgba(45,226,230,0.08)',
              color: '#CFEFEF',
              borderColor: 'rgba(45,226,230,0.3)',
            }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* aurora rule */}
      <div
        className="relative z-10 h-[3px] mt-4 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #2DE2E6, #A06CFF, #FF5DA2)',
          boxShadow: '0 0 14px rgba(160,108,255,0.55)',
        }}
      />
    </header>
  )
}
