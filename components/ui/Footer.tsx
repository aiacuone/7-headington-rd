'use client'

import { Home, Loader2, Menu } from 'lucide-react'
import { Button } from './button'
import { useDisclosure } from '@/lib/hooks'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useAuth } from '@/lib/hooks/useAuth'
import { useFilteredNavigation } from '@/lib/hooks/useFilteredNavigation'
import { capitalizeString } from '@/lib/utils/string'

export const Footer = () => {
  const { isOpen, onClose, toggle } = useDisclosure()
  const { isLoading, isSignedIn } = useAuth()

  const handleLoginAndLogout = async () => {
    if (isSignedIn) return signOut()

    signIn()
  }

  return (
    <>
      <div className="p-2 bg-muted center h-[70px]">
        <Button onClick={toggle} className="h-10 absolute">
          <Menu />
        </Button>
        <div className="flex-1"></div>
        <Button onClick={handleLoginAndLogout} className="z-10">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : isSignedIn ? (
            'Sign Out'
          ) : (
            'Sign In'
          )}
        </Button>
      </div>
      <FooterDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}

interface FooterDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const FooterDrawer: FC<FooterDrawerProps> = ({ isOpen, onClose }) => {
  const { push } = useRouter()
  const { isAdmin } = useAuth()

  const onClickLink = (href: string) => {
    onClose()
    push(href)
  }

  const filteredNavigation = useFilteredNavigation()

  return (
    <Drawer open={isOpen}>
      <DrawerContent onBlur={onClose}>
        <DrawerHeader className="center">
          <div className="w-full max-w-screen-xl">
            <DrawerTitle>Select an option</DrawerTitle>
            <DrawerDescription>
              Navigate the app by selecting an option
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <DrawerFooter className="center">
          <div className="overflow-y-scroll stack gap-3 hide-scrollbar max-h-[350px]">
            {filteredNavigation.map(
              ({ text, href, restrictedRoles }, index) => {
                const hasRestrictedRoles = restrictedRoles

                return (
                  <Button
                    onClick={() => onClickLink(href)}
                    className="sm:min-w-[250px] min-w-full"
                    key={`drawer link ${index}`}
                  >
                    {text}{' '}
                    {isAdmin &&
                      hasRestrictedRoles &&
                      restrictedRoles?.map((role) => (
                        <>({capitalizeString(role)})</>
                      ))}
                  </Button>
                )
              }
            )}
          </div>
          <DrawerClose>
            <div className="hstack gap-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button variant="outline" onClick={() => onClickLink('/')}>
                <Home />
              </Button>
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
