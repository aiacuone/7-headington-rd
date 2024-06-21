'use client'

import { ModeToggle } from '../ModeToggle'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import { capitalizeString } from '@/lib/utils/string'

export const Header = () => {
  const pathname = usePathname()
  const { hasAccess, isAdmin } = useAuth()
  const currentPage = navigation.find((item) => item.href === pathname)
  const headerTitle = currentPage?.text
  const pageHasRestrictedRoles = currentPage?.restrictedRoles

  return (
    <header className="bg-muted p-2 relative center h-[70px]">
      <div className="w-full max-w-screen-xl hstack">
        <div className="center">{hasAccess && <p>7 Headington Rd</p>}</div>
        <div className="flex-1 center gap-3">
          <div className="center gap-2 absolute">
            <p className=" text-center w-full left-0 font-bold">
              {hasAccess && headerTitle}
            </p>
            {isAdmin &&
              pageHasRestrictedRoles &&
              currentPage?.restrictedRoles?.map((restrictedRole) => (
                <p key={restrictedRole}>({capitalizeString(restrictedRole)})</p>
              ))}
          </div>
        </div>
        {hasAccess && <ModeToggle />}
      </div>
    </header>
  )
}
