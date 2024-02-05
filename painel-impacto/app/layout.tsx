import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Impacto Automação | Painel Gerencial',
  description: 'Impacto Automação | Painel Gerencial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
