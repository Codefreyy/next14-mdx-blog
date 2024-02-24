import "./globals.css"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/ThemeProvider"

export const metadata = {
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
          {/* <MyProfilePic /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
