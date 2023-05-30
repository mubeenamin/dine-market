import NavBar from './components/navbar'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'Buy your products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <div className='max-w-7xl mx-auto'>
        <NavBar/>
        {children}</div>
        </body>
    </html>
  )
}
