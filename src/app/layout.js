
import NextTopLoader from 'nextjs-toploader';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";



import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // title: 'Create Next App',
  description: 'Hospital in Chinchwad Pune | Best Multispeciality Hospital - Aditya Birla. Leading Health Centre for maternity, neurology, Knee-replace',
}

export default function RootLayout({ children }) {
  return (



    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
        color="#901412"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
      />

      <Header />

      {children}

      <Footer />
     
      </body>
    </html>
  )
}
