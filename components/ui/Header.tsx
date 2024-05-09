'use client'

import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import { Button } from './button'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'

export const Header = () => {
  const pathname = usePathname()
  // const currentPage = pathname.split('/').pop()
  // console.log({ currentPage })
  const currentPage = navigation.find((item) => item.href === pathname)
  const headerTitle = currentPage?.text
  return (
    <header className="hstack dark:bg-slate-800 bg-slate-100 p-2 relative">
      <div className="center">
        <p>7 Headington Rd</p>
      </div>
      <div className="flex-1 center gap-3">
        <p className="absolute text-center w-full left-0">{headerTitle}</p>
      </div>
      <ModeToggle />
    </header>
  )
}
