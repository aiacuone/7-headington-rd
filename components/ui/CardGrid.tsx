'use client'

import { HouseItem } from '@/lib/types'
import { capitalizeString } from '@/lib/utils/string'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDisclosure } from '@/lib/hooks'

interface CardGridProps {
  list: HouseItem[]
}

export const CardGrid: FC<CardGridProps> = ({ list }) => {
  const { onOpen, isOpen, toggle } = useDisclosure()
  return (
    <>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((listItem, index) => (
          <Card onClick={onOpen} key={`grid item ${index}`} {...listItem} />
        ))}
      </div>
      <CardDialog open={isOpen} onOpenChange={toggle} />
    </>
  )
}

const Card: FC<HouseItem & { onClick: () => void }> = ({
  label,
  imageSources,
  href,
  onClick,
  ...rest
}) => {
  return (
    <div>
      <div
        onClick={onClick}
        className="flex justify-center bg-muted rounded p-2 cursor-pointer">
        <div className="stack gap-3">
          <h3>{label}</h3>
          <div className="center">
            <Image
              alt={`${label} Image`}
              src={imageSources[0]}
              width={300}
              height={300}
              className="rounded-sm"
            />
          </div>
          <ul>
            {Object.entries(rest).map(([key, value], index) => (
              <li key={`item ${index}`}>
                <div className="hstack gap-2">
                  <p className="font-bold">{capitalizeString(key)}:</p>
                  <p>{value}</p>
                </div>
              </li>
            ))}
            {href && (
              <Link href={href} target="_blank">
                Link
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div className="h-[10px]" />
    </div>
  )
}

interface CardDialogProps {
  open: boolean
  onOpenChange: () => void
}

const CardDialog: FC<CardDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
