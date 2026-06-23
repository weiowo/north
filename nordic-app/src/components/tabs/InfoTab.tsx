import { TRIP, tripDayCount } from '@/lib/data'

export default function InfoTab() {
  const total = tripDayCount()

  return (
    <div>
      <div className="text-[18px] font-[560] mb-2.5" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
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

      <div className="text-[18px] font-[560] mb-2.5" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
        航班總覽
      </div>
      <div
        className="rounded-[16px] border p-4 mb-4 text-[13px] text-ink-soft leading-loose"
        style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)', fontFamily: 'var(--font-jetbrains), monospace' }}
      >
        <FlightRow from="TPE" to="PRG" code="CI67" day="D1" time="23:30 → 06:45+1" />
        <FlightRow from="PRG" to="CPH" code="SK768" day="D2" time="10:20 → 11:40" />
        <FlightRow from="CPH" to="OSL" code="SK1462" day="D3" time="08:05 → 09:15" />
        <FlightRow from="BGO" to="HEL" code="AY0922" day="D7" time="08:50 → 12:25" />
        <FlightRow from="RVN" to="HEL" code="AY0532" day="D9" time="09:00 → 10:15" />
        <FlightRow from="ARN" to="LHR" code="BA779" day="D11" time="07:40 → 09:35" />
        <FlightRow from="LHR" to="TPE" code="CI82" day="D12" time="21:10 → 17:50+1" last />
      </div>

      <div className="text-[18px] font-[560] mb-2.5" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
        小提醒
      </div>
      <div
        className="rounded-[16px] border p-4 text-[13px] text-ink-soft leading-relaxed"
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
      <span className="text-[12px] text-mist shrink-0">{label}</span>
      <span className="text-[13px] text-ink text-right">{value}</span>
    </div>
  )
}

function FlightRow({
  from, to, code, day, time, last,
}: {
  from: string; to: string; code: string; day: string; time: string; last?: boolean
}) {
  return (
    <div
      className="flex items-center justify-between py-1.5 text-[12px]"
      style={{ borderBottom: last ? undefined : '1px solid rgba(255,255,255,0.06)' }}
    >
      <span className="text-neon-cyan w-[36px]">{day}</span>
      <span className="text-ink font-semibold">{from} → {to}</span>
      <span className="text-mist">{code}</span>
      <span className="text-ink-soft text-right">{time}</span>
    </div>
  )
}
