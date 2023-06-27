import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children,  session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
        </body>
    </html>
  )
}
