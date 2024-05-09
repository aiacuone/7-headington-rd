'use client'

import { ModeToggle } from '../ModeToggle'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'

export const Header = () => {
  const pathname = usePathname()
  const currentPage = navigation.find((item) => item.href === pathname)
  const headerTitle = currentPage?.text

  return (
    <header className="dark:bg-slate-900 bg-slate-50 p-2 relative center">
      <div className="w-full max-w-screen-lg hstack">
        <div className="center">
          <p>7 Headington Rd</p>
        </div>
        <div className="flex-1 center gap-3">
          <p className="absolute text-center w-full left-0">{headerTitle}</p>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
