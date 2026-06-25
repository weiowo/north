export interface Expense {
  id: string
  desc: string
  amount: number
  currency: string
  payer: string
  day: number | null
  created_at: string
}

export type TransitMode = 'walk' | 'metro' | 'car' | 'bus' | 'taxi' | 'ferry' | 'train' | 'flight' | 'shuttle'

export interface Transit {
  mode: TransitMode
  label: string
  mapsUrl?: string
}

export interface ItineraryItem {
  id: string
  day: number
  time: string
  title: string
  location: string
  notes: string
  transit?: Transit
  mapsUrl?: string | string[]
}

export interface StayInfo {
  icon: string
  label: string
  name: string
  notes: string
  mapsUrl?: string
  isTransport?: boolean
}

export interface PackingItem {
  id: string
  text: string
  category: string
}

export type Tab = 'itinerary' | 'packing' | 'expenses' | 'info'
