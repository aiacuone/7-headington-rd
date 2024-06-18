'use client'

import { ModeToggle } from '../ModeToggle'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'
import { useSession } from 'next-auth/react'
import { useAuth } from '@/lib/hooks/useAuth'

export const Header = () => {
  const pathname = usePathname()
  const { hasAccess } = useAuth()
  const currentPage = navigation.find((item) => item.href === pathname)
  const headerTitle = currentPage?.text

  return (
    <header className="bg-muted p-2 relative center h-[70px]">
      <div className="w-full max-w-screen-xl hstack">
        <div className="center">{hasAccess && <p>7 Headington Rd</p>}</div>
        <div className="flex-1 center gap-3">
          <div className="hstack gap-3">
            <p className="absolute text-center w-full left-0 font-bold">
              {hasAccess && headerTitle}
            </p>
          </div>
        </div>
        {hasAccess && <ModeToggle />}
      </div>
    </header>
  )
}
