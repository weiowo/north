import type { ItineraryItem, StayInfo, PackingItem } from './types'

export const TRIP = {
  name: '北歐冒險之旅',
  start: '2026-10-01',
  end: '2026-10-13',
  members: ['Amy', 'Jyun', 'Gaga', 'Joie', 'Bill', 'Eve'],
}

export const ITINERARY: ItineraryItem[] = [
  { id: 'd1-0', day: 1, time: '21:00', title: '桃園機場集合', location: '桃園國際機場 第一航廈', notes: '' },
  { id: 'd1-1', day: 1, time: '23:30', title: '桃園飛布拉格', location: '桃園國際機場 第一航廈', notes: 'CI67 · 23:30 TPE → 06:45 PRG（+1）· 約 13hr15min · 抵達布拉格第一航廈' },

  { id: 'd2-1', day: 2, time: '06:45', title: '抵達布拉格（轉機）', location: '布拉格機場 第一航廈', notes: '' },
  { id: 'd2-2', day: 2, time: '10:20', title: '布拉格飛哥本哈根', location: '布拉格機場 第二航廈', notes: 'SK768 · 10:20 PRG → 11:40 CPH · 約 1hr20min · 抵達哥本哈根第三航廈', transit: { mode: 'shuttle', label: '航廈接駁巴士 · 約 15 分鐘' } },
  { id: 'd2-3', day: 2, time: '11:40', title: '抵達哥本哈根', location: '哥本哈根機場 第三航廈', notes: '' },
  { id: 'd2-4', day: 2, time: '13:00', title: '放行李 Check-in', location: 'Comfort Hotel Copenhagen Airport', notes: '含早餐 · 大型家庭房×1（兩張單人床 + 兩個上下鋪）', transit: { mode: 'walk', label: '步行 · 約 5 分鐘' } },
  { id: 'd2-5',  day: 2, time: '14:00', title: '搭地鐵 M2 前往市區', location: '哥本哈根機場地鐵站', notes: '搭 M2 往 Vanløse 方向 → Østerport 站下車', transit: { mode: 'walk', label: '步行至地鐵站 · 約 5 分鐘' } },
  { id: 'd2-10b', day: 2, time: '14:30', title: '小美人魚雕像', location: 'The Little Mermaid, Langelinie, Copenhagen', notes: '安徒生童話原鄉 · 步行沿海濱散步', transit: { mode: 'metro', label: '地鐵 M2 → Østerport 站 · 步行約 10 分鐘' } },
  { id: 'd2-10', day: 2, time: '15:15', title: '阿馬林堡宮', location: 'Amalienborg Slotsplads, Copenhagen', notes: '丹麥皇宮廣場 · 可能遇到御林軍交接儀式', transit: { mode: 'walk', label: '步行 · 約 15 分鐘' } },
  { id: 'd2-9b', day: 2, time: '15:45', title: '新港 Nyhavn', location: 'Nyhavn, Copenhagen', notes: '彩色排屋運河街 · 拍照打卡必去 · 沿運河散步約 15 分鐘', transit: { mode: 'walk', label: '步行 · 約 5 分鐘' } },
  { id: 'd2-9',  day: 2, time: '16:15', title: '國王新廣場', location: 'Kongens Nytorv, Copenhagen', notes: '哥本哈根最大廣場 · 新港運河起點', transit: { mode: 'walk', label: '步行 · 約 5 分鐘' } },
  { id: 'd2-6',  day: 2, time: '16:30', title: 'Hart Bageri 丹麥麵包', location: 'Hart Bageri, Gammel Mønt 8', notes: '必吃丹麥傳統麵包 · 推薦肉桂捲、可頌', transit: { mode: 'walk', label: '步行 · 約 5 分鐘' } },
  { id: 'd2-7',  day: 2, time: '17:00', title: 'Strøget 購物街', location: 'Strøget, Copenhagen', notes: '哥本哈根最長步行購物街，從市政廳廣場延伸至國王新廣場', transit: { mode: 'walk', label: '步行 · 約 5 分鐘' } },
  { id: 'd2-7b', day: 2, time: '',      title: 'Flying Tiger Copenhagen', location: 'Flying Tiger, Frederiksborggade 1, Copenhagen', notes: 'Flying Tiger 發源於哥本哈根，靠近圓塔必逛', transit: { mode: 'walk', label: '步行 · 約 3 分鐘' } },
  { id: 'd2-8',  day: 2, time: '17:30', title: '圓塔 Rundetårn', location: 'Rundetårn, Købmagergade 52A, Copenhagen', notes: '建於 1642 年 · 爬螺旋坡道登頂俯瞰哥本哈根市區', transit: { mode: 'walk', label: '步行 · 約 3 分鐘' } },
  { id: 'd2-8b', day: 2, time: '18:30', title: 'DØP 有機丹麥熱狗', location: 'DØP, Amagertorv 31, Copenhagen', notes: '就在 Strøget 上 · 有機食材精品熱狗 · 19:00 關門', transit: { mode: 'walk', label: '步行 · 約 5 分鐘' } },
  { id: 'd2-11', day: 2, time: '19:30', title: '晚餐：Gasoline Grill 漢堡', location: 'Gasoline Grill, Landgreven 10, Copenhagen', notes: '世界知名精品漢堡 · 售完為止建議 19:30 前到', transit: { mode: 'walk', label: '步行 · 約 15 分鐘' } },
  { id: 'd2-12', day: 2, time: '21:00', title: '返回飯店', location: 'Comfort Hotel Copenhagen Airport', notes: '', transit: { mode: 'metro', label: '步行至 Østerport 站 · 地鐵 M2 · 約 25 分鐘' } },

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
  { id: 'p1',  text: '護照（效期確認）',              category: '重要文件' },
  { id: 'p2',  text: '身分證',                        category: '重要文件' },
  { id: 'p3',  text: '國際駕照（租車用）',             category: '重要文件' },
  { id: 'p4',  text: '電子機票 / 訂位確認信',          category: '重要文件' },
  { id: 'p5',  text: '旅遊保險保單',                   category: '重要文件' },
  { id: 'p6',  text: '信用卡（確認海外刷卡功能）',     category: '重要文件' },
  { id: 'p7',  text: '現金（NOK / SEK / DKK / EUR）', category: '重要文件' },

  { id: 'p8',  text: '手機',                          category: '電子產品' },
  { id: 'p9',  text: '相機 + 記憶卡',                 category: '電子產品' },
  { id: 'p10', text: 'GoPro',                         category: '電子產品' },
  { id: 'p11', text: '自拍棒',                         category: '電子產品' },
  { id: 'p12', text: '腳架',                           category: '電子產品' },
  { id: 'p13', text: '行李電子秤',                     category: '電子產品' },
  { id: 'p14', text: '手機防水袋',                     category: '電子產品' },
  { id: 'p15', text: '行動電源',                       category: '電子產品' },
  { id: 'p16', text: '充電線',                         category: '電子產品' },
  { id: 'p17', text: '萬用轉接插頭',                   category: '電子產品' },

  { id: 'p18', text: '羽絨外套（北歐 10 月必備）',     category: '服飾' },
  { id: 'p19', text: '防水保暖外套',                   category: '服飾' },
  { id: 'p20', text: '防水鞋 / 靴子',                  category: '服飾' },
  { id: 'p21', text: '舒適步行鞋',                     category: '服飾' },
  { id: 'p22', text: '拖鞋',                           category: '服飾' },
  { id: 'p23', text: '長袖衣服們',                     category: '服飾' },
  { id: 'p24', text: '長褲們',                         category: '服飾' },
  { id: 'p25', text: '內衣褲們',                       category: '服飾' },
  { id: 'p26', text: '襪子們',                         category: '服飾' },
  { id: 'p27', text: '內搭保暖褲襪',                   category: '服飾' },
  { id: 'p28', text: '舒適睡覺衣褲',                   category: '服飾' },
  { id: 'p29', text: '保暖毛帽',                       category: '服飾' },
  { id: 'p30', text: '圍巾、圍脖',                     category: '服飾' },
  { id: 'p31', text: '保暖防水手套',                   category: '服飾' },

  { id: 'p32', text: '洗髮、潤髮乳',                   category: '個人盥洗' },
  { id: 'p33', text: '沐浴乳',                         category: '個人盥洗' },
  { id: 'p34', text: '洗面乳、卸妝乳',                 category: '個人盥洗' },
  { id: 'p35', text: '乳液、化妝水',                   category: '個人盥洗' },
  { id: 'p36', text: '其他美妝品',                     category: '個人盥洗' },
  { id: 'p37', text: '梳子、髮圈',                     category: '個人盥洗' },
  { id: 'p38', text: '牙膏、牙刷',                     category: '個人盥洗' },
  { id: 'p39', text: '刮鬍刀',                         category: '個人盥洗' },
  { id: 'p40', text: '隱形眼鏡',                       category: '個人盥洗' },

  { id: 'p41', text: '退燒、止痛藥',                   category: '備用藥品' },
  { id: 'p42', text: '眼藥水',                         category: '備用藥品' },
  { id: 'p43', text: 'OK繃',                           category: '備用藥品' },
  { id: 'p44', text: '小護士',                         category: '備用藥品' },
  { id: 'p45', text: '暈車暈船藥（郵輪 + 峽灣船用）', category: '備用藥品' },
  { id: 'p46', text: '近視眼鏡、老花眼鏡',             category: '備用藥品' },

  { id: 'p47', text: '雨衣（雨傘）',                   category: '生活相關' },
  { id: 'p48', text: '太陽眼鏡',                       category: '生活相關' },
  { id: 'p49', text: '口罩',                           category: '生活相關' },
  { id: 'p50', text: '酒精',                           category: '生活相關' },
  { id: 'p51', text: '暖暖包',                         category: '生活相關' },
  { id: 'p52', text: '保溫瓶',                         category: '生活相關' },
  { id: 'p53', text: '面紙、濕紙巾',                   category: '生活相關' },
  { id: 'p54', text: '手機防水套',                     category: '生活相關' },
  { id: 'p55', text: '網卡、電話卡',                   category: '生活相關' },
  { id: 'p56', text: 'Google Maps 離線地圖',           category: '生活相關' },
  { id: 'p57', text: '緊急聯絡人清單',                 category: '生活相關' },

  { id: 'p58', text: '各種餅乾、糖果',                 category: '台灣糧食' },
  { id: 'p59', text: '沖泡包們',                       category: '台灣糧食' },
  { id: 'p60', text: '泡麵們',                         category: '台灣糧食' },
  { id: 'p61', text: '簡單調味料',                     category: '台灣糧食' },
]

export function tripDayCount(): number {
  const s = new Date(TRIP.start)
  const e = new Date(TRIP.end)
  return Math.max(1, Math.round((e.getTime() - s.getTime()) / 86400000) + 1)
}

export function dayDate(dayNum: number): string {
  const d = new Date(TRIP.start)
  d.setDate(d.getDate() + dayNum - 1)
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  return `${d.getMonth() + 1}/${d.getDate()}（${weekdays[d.getDay()]}）`
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
