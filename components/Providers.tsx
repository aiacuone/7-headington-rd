import { FC } from 'react'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}