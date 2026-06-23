import { TRIP, tripDayCount } from '@/lib/data'

const FLIGHTS = [
  {
    day: 'D1', date: '10/1（四）',
    from: 'TPE', fromCity: '桃園',
    to: 'PRG', toCity: '布拉格',
    code: 'CI67', time: '23:30 → 06:45+1',
    duration: '13hr15min', baggage: '托運 30kg · 手提 7kg',
  },
  {
    day: 'D2', date: '10/2（五）',
    from: 'PRG', fromCity: '布拉格',
    to: 'CPH', toCity: '哥本哈根',
    code: 'SK768', time: '10:20 → 11:40',
    duration: '1hr20min', baggage: '托運 23kg · 手提 8kg',
  },
  {
    day: 'D3', date: '10/3（六）',
    from: 'CPH', fromCity: '哥本哈根',
    to: 'OSL', toCity: '奧斯陸',
    code: 'SK1462', time: '08:05 → 09:15',
    duration: '1hr10min', baggage: '托運 23kg · 手提 8kg',
  },
  {
    day: 'D7', date: '10/7（三）',
    from: 'BGO', fromCity: '卑爾根',
    to: 'HEL', toCity: '赫爾辛基',
    code: 'AY0922', time: '08:50 → 12:25',
    duration: '1hr35min', baggage: '托運 23kg · 手提 8kg',
  },
  {
    day: 'D9', date: '10/9（五）',
    from: 'RVN', fromCity: '羅瓦涅米',
    to: 'HEL', toCity: '赫爾辛基',
    code: 'AY0532', time: '09:00 → 10:15',
    duration: '1hr15min', baggage: '托運 23kg · 手提 8kg',
  },
  {
    day: 'D11', date: '10/11（日）',
    from: 'ARN', fromCity: '斯德哥爾摩',
    to: 'LHR', toCity: '倫敦',
    code: 'BA779', time: '07:40 → 09:35',
    duration: '2hr55min', baggage: '托運 23kg · 手提 12kg',
  },
  {
    day: 'D12', date: '10/12（一）',
    from: 'LHR', fromCity: '倫敦',
    to: 'TPE', toCity: '桃園',
    code: 'CI82', time: '21:10 → 17:50+1',
    duration: '13hr40min', baggage: '托運 30kg · 手提 7kg',
  },
]

export default function InfoTab() {
  const total = tripDayCount()

  return (
    <div>
      <div className="text-[18px] font-[560] mb-2.5">
        行程基本資料
      </div>

      <div
        className="rounded-[16px] border p-4 mb-4"
        style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)' }}
      >
        <InfoRow label="旅程名稱" value={TRIP.name} />
        <InfoRow label="出發日" value={TRIP.start} />
        <InfoRow label="回程日" value={TRIP.end} />
        <InfoRow label="旅程天數" value={`${total} 天`} />
        <InfoRow label="同行成員" value={TRIP.members.join('、')} last />
      </div>

      <div className="text-[18px] font-[560] mb-2.5">
        航班總覽
      </div>
      <div
        className="rounded-[16px] border mb-4 overflow-hidden"
        style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)' }}
      >
        <div style={{ overflowX: 'auto' }}>
        {/* header */}
        <div
          className="grid gap-2 px-4 py-2.5 text-[14px] font-semibold"
          style={{
            gridTemplateColumns: '90px minmax(180px, 1fr) 72px 110px',
            minWidth: '500px',
            background: 'rgba(45,226,230,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.10)',
            color: '#728099',
          }}
        >
          <span>日期</span>
          <span>路線</span>
          <span>航班</span>
          <span>時間</span>
        </div>

        {FLIGHTS.map((f, idx) => (
          <div
            key={f.code}
            className="px-4 py-3 text-[14px]"
            style={{ borderBottom: idx < FLIGHTS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined, minWidth: '500px' }}
          >
            <div
              className="grid gap-2 items-center"
              style={{ gridTemplateColumns: '90px minmax(180px, 1fr) 72px 110px' }}
            >
              <div>
                <span className="font-semibold" style={{ color: '#2DE2E6' }}>{f.day}</span>
                <span className="block text-[14px]" style={{ color: '#728099' }}>{f.date}</span>
              </div>
              <div>
                <span className="text-ink font-semibold">
                  {f.fromCity} → {f.toCity}
                </span>
                <span className="block text-[14px]" style={{ color: '#728099' }}>
                  {f.from} → {f.to}
                </span>
              </div>
              <span style={{ color: '#B7C7DE' }}>{f.code}</span>
              <div>
                <span className="text-ink">{f.time}</span>
                <span className="block text-[14px]" style={{ color: '#728099' }}>{f.duration}</span>
              </div>
            </div>
            <div className="mt-1.5 text-[14px]" style={{ color: '#728099' }}>
              🧳 {f.baggage}
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="text-[18px] font-[560] mb-2.5">
        小提醒
      </div>
      <div
        className="rounded-[16px] border p-4 text-[14px] text-ink-soft leading-relaxed"
        style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)' }}
      >
        把這個頁面連結分享給家人，大家用同一個連結就能看到行程、清單，也可以一起記花費喔。
      </div>
    </div>
  )
}

function InfoRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div
      className="flex justify-between items-start py-2.5 gap-4"
      style={{ borderBottom: last ? undefined : '1px solid rgba(255,255,255,0.10)' }}
    >
      <span className="text-[14px] text-mist shrink-0">{label}</span>
      <span className="text-[14px] text-ink text-right">{value}</span>
    </div>
  )
}
