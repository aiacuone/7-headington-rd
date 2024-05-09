import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '7 Headington Rd',
  description: 'Rent Guide',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="stack h-[100dvh] ">
            <header className="hstack dark:bg-slate-800 bg-slate-100 p-2">
              <div className="flex-1 center">
                <h1>7 Headington Rd</h1>
              </div>
              <ModeToggle />
            </header>
            <main className="flex-1 center">{children}</main>
            <footer className="p-2 dark:bg-slate-800 bg-slate-100 center">
              footer
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
