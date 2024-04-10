import "./globals.css"
import Navbar from "./components/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Joy's Blog",
  description: "Created by Joy Peng",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="dark:bg-themeBlack">
        <Navbar />
        <main className="mt-10 px-4 prose dark:prose-invert max-w-3xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
