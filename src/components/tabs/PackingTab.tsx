import { PACKING } from '@/lib/data'

export default function PackingTab() {
  const categories = Array.from(new Set(PACKING.map((p) => p.category)))

  return (
    <div>
      <div className="text-[18px] font-[560] mb-2.5" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
        打包清單
      </div>
      <div className="text-[12.5px] text-mist mb-4">共 {PACKING.length} 項</div>

      {categories.map((cat) => (
        <div key={cat} className="mb-4">
          <div
            className="text-[11px] tracking-[0.08em] uppercase mb-2 px-1"
            style={{ color: '#2DE2E6' }}
          >
            {cat}
          </div>
          <div
            className="rounded-[16px] border overflow-hidden"
            style={{ background: '#101A2C', borderColor: 'rgba(255,255,255,0.10)' }}
          >
            {PACKING.filter((p) => p.category === cat).map((p, idx, arr) => (
              <div
                key={p.id}
                className="flex items-center gap-2.5 px-4 py-3"
                style={{
                  borderBottom: idx < arr.length - 1 ? '1px solid rgba(255,255,255,0.10)' : undefined,
                }}
              >
                <span className="text-[14px] text-ink">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
