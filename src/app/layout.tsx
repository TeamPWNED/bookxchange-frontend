import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import '../styles/globals.css'
import { cn } from "../lib/utils"
import { Toaster } from 'react-hot-toast'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Book Exchange',
  description: 'Share books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body
      //  bg-background
        className={cn(
          "min-h-screen  font-sans antialiased flex-col bg-custom-bg",
          fontSans.variable
        )}
      >{children}
      <Toaster/>
      </body>
    </html>
  )
}
