import './globals.scss'
import {Poppins} from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600']
})

export const metadata = {
  title: 'Marcelino Garcia',
  description: 'Desenvolvedor Next.js e Professor no IFMS...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
