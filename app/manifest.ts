import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '北歐冒險之旅',
    short_name: '北歐冒險',
    description: '北歐家庭旅行行程、清單與花費記錄',
    start_url: '/',
    display: 'standalone',
    background_color: '#070B16',
    theme_color: '#070B16',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
