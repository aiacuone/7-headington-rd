'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { Loader2 } from 'lucide-react'
import { FC } from 'react'
interface MainProps {
  children: React.ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  const { isLoading } = useAuth()

  if (isLoading) return <LoadingAnimation />

  return (
    <div
      className="overflow-y-scroll hide-scrollbar flex items:start p-[10px] justify-center flex-1"
      id="main-container">
      {children}
    </div>
  )
}

const LoadingAnimation = () => {
  return (
    <div className="center flex-1">
      <Loader2 size="40px" />
    </div>
  )
}
