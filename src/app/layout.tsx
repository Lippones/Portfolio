import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { QueryClientProvider } from '@/components/query-client-provider'
import { LenisScrollProvider } from '@/components/lenis-scroll-provider'
import { Profile } from '@/components/profile'
import { TransitionPage } from '@/components/transition-page'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export const metadata: Metadata = {
  title: 'Filipe Vieira',
  description: 'Portfolio of Filipe Vieira',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <QueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            // disableTransitionOnChange
          >
            <LenisScrollProvider>
              <TransitionPage>
                <div className="flex flex-col flex-1 min-h-screen">
                  <Header
                    paths={[
                      { label: 'Home', href: '/' },
                      { label: 'Projects', href: '/projects' },
                      { label: 'About', href: '/about' },
                      { label: 'Contact', href: '/contact' },
                    ]}
                  />
                  {children}
                </div>
                <Profile />
              </TransitionPage>
            </LenisScrollProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
