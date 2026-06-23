import type { ItineraryItem, StayInfo, PackingItem } from './types'

export const TRIP = {
  name: '北歐家庭旅行',
  start: '2026-10-01',
  end: '2026-10-13',
  members: ['Amy', 'Jyun', 'Gaga', 'Joie', 'Bill', 'Eve'],
}

export const ITINERARY: ItineraryItem[] = [
  { id: 'd1-1', day: 1, time: '23:30', title: '桃園飛布拉格', location: '桃園國際機場 第一航廈', notes: 'CI67 · 23:30 TPE → 06:45 PRG（+1）· 約 13hr15min · 抵達布拉格第一航廈' },

  { id: 'd2-1', day: 2, time: '06:45', title: '抵達布拉格（轉機）', location: '布拉格機場 第一航廈', notes: '' },
  { id: 'd2-2', day: 2, time: '10:20', title: '布拉格飛哥本哈根', location: '布拉格機場 第二航廈', notes: 'SK768 · 10:20 PRG → 11:40 CPH · 約 1hr20min · 抵達哥本哈根第三航廈' },
  { id: 'd2-3', day: 2, time: '11:40', title: '抵達哥本哈根，市區遊玩', location: '哥本哈根 Copenhagen', notes: '' },

  { id: 'd3-1', day: 3, time: '08:05', title: '哥本哈根飛奧斯陸', location: '哥本哈根機場 第三航廈', notes: 'SK1462 · 08:05 CPH → 09:15 OSL · 約 1hr10min' },
  { id: 'd3-2', day: 3, time: '11:00', title: 'Avis 租車取車', location: '奧斯陸機場 Gardermoen', notes: 'Mercedes Vito 九人座，手排車 · 11:00 取車（10/6 22:00 卑爾根機場還車）' },
  { id: 'd3-3', day: 3, time: '', title: '開車前往利勒哈默爾', location: '利勒哈默爾 Lillehammer', notes: '車程約 1hr40min' },
  { id: 'd3-4', day: 3, time: '', title: '開車前往 Trolltun Hotel & Hytter', location: 'Trolltun Hotel & Hytter', notes: '車程約 2hr' },

  { id: 'd4-1', day: 4, time: '', title: '從 Trolltun 出發', location: 'Trolltun Hotel & Hytter', notes: '車程約 2hr27min' },
  { id: 'd4-2', day: 4, time: '', title: '精靈之路 Trollstigen', location: 'Trollstigen', notes: '車程約 1hr14min' },
  { id: 'd4-3', day: 4, time: '', title: '抵達 Dalen Apartments', location: 'Dalen Apartments', notes: '' },

  { id: 'd5-1', day: 5, time: '', title: '從 Dalen 出發前往 Hellesylt', location: 'Hellesylt', notes: '' },
  { id: 'd5-2', day: 5, time: '', title: '前往 Wangen Apartments', location: 'Wangen Apartments', notes: '' },

  { id: 'd6-1', day: 6, time: '', title: '從 Wangen Apartments 出發前往 Flåm', location: 'Flåm', notes: '車程約 10 分鐘' },
  { id: 'd6-2', day: 6, time: '09:30', title: 'Flåm 峽灣遊船出發', location: 'Flåm 碼頭', notes: 'Nærøyfjord 遊船 → Gudvangen · 11:30 抵達（2hr）' },
  { id: 'd6-3', day: 6, time: '12:45', title: '接駁巴士返回 Flåm', location: 'Gudvangen', notes: '13:05 抵達 Flåm（20min）· 班次資訊 4131' },
  { id: 'd6-4', day: 6, time: '', title: '開車前往卑爾根', location: '卑爾根 Bergen', notes: '車程約 2hr30min' },
  { id: 'd6-5', day: 6, time: '22:00', title: '前往卑爾根機場還車', location: '卑爾根機場 Bergen Flesland', notes: '車程約 17 分鐘 · Avis 還車' },

  { id: 'd7-1', day: 7, time: '08:50', title: '卑爾根飛赫爾辛基', location: '卑爾根機場 Flesland', notes: 'AY0922 · 08:50 BGO → 12:25 HEL · 約 1hr35min' },
  { id: 'd7-2', day: 7, time: '19:29', title: '夜車前往羅瓦涅米', location: '赫爾辛基中央車站', notes: 'VR 火車 · 19:29 出發 → 隔日 07:20 抵達 Rovaniemi' },

  { id: 'd8-1', day: 8, time: '07:20', title: '抵達羅瓦涅米', location: '羅瓦涅米 Rovaniemi', notes: '' },
  { id: 'd8-2', day: 8, time: '', title: '聖誕老人村', location: 'Santa Claus Village, Rovaniemi', notes: '' },

  { id: 'd9-1', day: 9, time: '09:00', title: '羅瓦涅米飛赫爾辛基', location: '羅瓦涅米機場', notes: 'AY0532 · 09:00 RVN → 10:15 HEL · 約 1hr15min' },
  { id: 'd9-2', day: 9, time: '16:45', title: '搭乘郵輪前往斯德哥爾摩', location: '赫爾辛基 Olympia Terminal', notes: 'Silja Symphony（Tallink Silja）· 16:45 出發 · A-Standard 海景艙房 · 隔日 10:00 抵達斯德哥爾摩 Värtahamnen' },

  { id: 'd10-1', day: 10, time: '10:00', title: '抵達斯德哥爾摩，市區遊玩', location: '斯德哥爾摩 Värtahamnen', notes: '' },

  { id: 'd11-1', day: 11, time: '07:40', title: '斯德哥爾摩飛倫敦', location: '斯德哥爾摩 Arlanda 第二航廈', notes: 'BA779 · 07:40 ARN → 09:35 LHR · 約 2hr55min · 抵達倫敦希斯洛第五航廈' },
  { id: 'd11-2', day: 11, time: '', title: '倫敦市區遊玩', location: '倫敦 London', notes: '' },

  { id: 'd12-1', day: 12, time: '21:10', title: '倫敦飛回台灣', location: '倫敦希斯洛機場 第三航廈', notes: 'CI82 · 21:10 LHR → 17:50 TPE（+1）· 約 13hr40min · 抵達桃園第一航廈' },

  { id: 'd13-1', day: 13, time: '17:50', title: '抵達台灣', location: '桃園國際機場 第一航廈', notes: '' },
]

export const STAYS: Record<number, StayInfo> = {
  2:  { icon: '🏨', label: '今晚住宿', name: 'Comfort Hotel Copenhagen Airport', notes: '含早餐 · 大型家庭房×1（兩張單人床+兩個上下鋪）' },
  3:  { icon: '🏨', label: '今晚住宿', name: 'Trolltun Hotel & Hytter', notes: '有廚房 · 一臥室公寓×2（每間一張雙人床+一個上下鋪）' },
  4:  { icon: '🏨', label: '今晚住宿', name: 'Dalen Apartments', notes: '有廚房 · 雙臥室公寓×1（一張雙人床+兩張單人床+一張沙發床）' },
  5:  { icon: '🏨', label: '今晚住宿', name: 'Wangen Apartments', notes: '有廚房 · 雙臥室公寓×1（兩張雙人床+一張沙發床）' },
  6:  { icon: '🏨', label: '今晚住宿', name: 'Comfort Hotel Bergen Airport', notes: '含早餐 · 標準雙床房×3' },
  7:  { icon: '🚂', label: '今晚過夜', name: '北極特快車（VR 夜車）', notes: '19:29 赫爾辛基出發 → 隔日 07:20 抵達羅瓦涅米 · 車上臥舖過夜', isTransport: true },
  8:  { icon: '🏨', label: '今晚住宿', name: 'Glass Resort', notes: '含早餐 + 有廚房 · 玻璃公寓×2（每間一張雙人床+一張沙發床）' },
  9:  { icon: '🚢', label: '今晚過夜', name: '詩麗雅郵輪 Silja Symphony', notes: 'Tallink Silja · A-Standard 海景艙房 · 16:45 赫爾辛基出發 → 隔日 10:00 抵達斯德哥爾摩 · 船上過夜', isTransport: true },
  10: { icon: '🏨', label: '今晚住宿', name: 'Clarion Hotel Arlanda Airport Terminal', notes: '含早餐 · 雙人房×1 + 家庭房×1（一張雙人床+一張沙發床）' },
  11: { icon: '🏨', label: '今晚住宿', name: 'Native Hyde Park', notes: '有廚房 · 一臥室公寓×2（每間一張雙人床+一張沙發床）' },
}

export const DRIVE_SUMMARY: Record<number, string> = {
  3: '3hr40min',
  4: '3hr45min',
  5: '4hr30min',
}

export const PACKING: PackingItem[] = [
  { id: 'p1',  text: '護照（效期確認）',            category: '證件' },
  { id: 'p2',  text: '電子機票 / 訂位確認信',        category: '證件' },
  { id: 'p3',  text: '旅遊保險保單',                 category: '證件' },
  { id: 'p4',  text: '歐洲插頭轉接頭',               category: '電子' },
  { id: 'p5',  text: '手機充電線',                   category: '電子' },
  { id: 'p6',  text: '行動電源',                     category: '電子' },
  { id: 'p7',  text: '相機 + 記憶卡',               category: '電子' },
  { id: 'p8',  text: '羽絨外套（北歐 10 月必備）',   category: '衣物' },
  { id: 'p9',  text: '防水外套',                     category: '衣物' },
  { id: 'p10', text: '保暖毛衣 × 幾件',              category: '衣物' },
  { id: 'p11', text: '舒適步行鞋',                   category: '衣物' },
  { id: 'p12', text: '防水鞋 / 靴子',               category: '衣物' },
  { id: 'p13', text: '帽子 + 手套 + 圍巾',          category: '衣物' },
  { id: 'p14', text: '常備藥品（感冒藥、止痛藥等）', category: '醫藥' },
  { id: 'p15', text: '暈車暈船藥',                   category: '醫藥' },
  { id: 'p16', text: '防曬乳',                       category: '盥洗' },
  { id: 'p17', text: '旅行用盥洗組',                 category: '盥洗' },
  { id: 'p18', text: '北歐各國現金（NOK / SEK / DKK）', category: '財務' },
  { id: 'p19', text: '信用卡（確認海外刷卡功能）',   category: '財務' },
  { id: 'p20', text: 'Google Maps 離線地圖',         category: '其他' },
  { id: 'p21', text: '緊急聯絡人清單',               category: '其他' },
]

export function tripDayCount(): number {
  const s = new Date(TRIP.start)
  const e = new Date(TRIP.end)
  return Math.max(1, Math.round((e.getTime() - s.getTime()) / 86400000) + 1)
}

export function dayDate(dayNum: number): string {
  const d = new Date(TRIP.start)
  d.setDate(d.getDate() + dayNum - 1)
  return d.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric', weekday: 'short' })
}

export function countdown(): { value: string; label: string } {
  const today = new Date(new Date().toDateString())
  const start = new Date(TRIP.start)
  const days = Math.ceil((start.getTime() - today.getTime()) / 86400000)
  if (days > 0)  return { value: String(days), label: '天後出發' }
  if (days === 0) return { value: '✈', label: '今天出發！' }
  if (-days < tripDayCount()) return { value: '●', label: '旅行中' }
  return { value: '✓', label: '已結束' }
}
