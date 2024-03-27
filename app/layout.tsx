import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Menu from '@/public/assets/icons/menu.svg';
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E commerce',
  description: 'Buy men, women & kids clothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
