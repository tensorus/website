// pages/_app.js
import '@/styles/globals.css'

// If using built-in Next.js font (Next.js 13+):
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
