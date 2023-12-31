import './globals.css'
import { Corinthia, Inter } from 'next/font/google'
import { CrowdFundingProvider } from '@/Context/CrowdFunding';
import { Navbar,Footer } from '@/Components/page';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CrowdFundingProvider>
          <Navbar/>
        <div>
        {children}
        </div>
        <Footer/>
        </CrowdFundingProvider>
        
        </body>
    </html>
  )
}
