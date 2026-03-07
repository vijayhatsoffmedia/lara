import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ReactNode } from "react"

export const metadata = {
  title: "AIGHT - AI Product Studio",
  description: "AI Product Studio specializing in Agentic AI systems",
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white min-h-screen flex flex-col">

        <Navbar />

        <main className="pt-24 flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}