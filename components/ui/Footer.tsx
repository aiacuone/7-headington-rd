'use client'

import { Home, Menu } from 'lucide-react'
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
import { navigation } from '@/lib/navigation'
import { useRouter } from 'next/navigation'

export const Footer = () => {
  const { isOpen, onClose, toggle } = useDisclosure()
  const { push } = useRouter()
  const onClickLink = (href: string) => {
    onClose()
    push(href)
  }

  return (
    <>
      <div className="p-2 dark:bg-slate-900 bg-slate-100 center">
        <Button onClick={toggle}>
          <Menu />
        </Button>
      </div>
      <Drawer open={isOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Select an option</DrawerTitle>
            <DrawerDescription>
              These are the options related to the house
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="center">
            <Button onClick={() => onClickLink('/')}>
              <Home />
            </Button>
            {navigation.map(({ text, href }, index) => (
              <Button
                onClick={() => onClickLink(href)}
                className="sm:min-w-[300px] min-w-full"
                key={`drawer link ${index}`}>
                {text}
              </Button>
            ))}
            <DrawerClose>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
