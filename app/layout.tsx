import "./globals.css"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/ThemeProvider"
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="mt-10 px-4 prose prose-md prose-slate dark:prose-invert max-w-3xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
