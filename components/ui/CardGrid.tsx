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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDisclosure } from '@/lib/hooks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from './button'

interface CardGridProps {
  list: HouseItem[]
}

export const CardGrid: FC<CardGridProps> = ({ list }) => {
  return (
    <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((listItem, index) => {
        return <Card key={`grid item ${index}`} {...listItem} />
      })}
    </div>
  )
}

const Card: FC<HouseItem> = (houseItem) => {
  const { label, imageSources, href, ...rest } = houseItem
  const { onOpen, isOpen, toggle } = useDisclosure()

  return (
    <>
      <div>
        <div className="flex justify-center bg-muted rounded p-2">
          <div className="stack gap-3">
            <h3>{label}</h3>
            <div className="center">
              <Image
                alt={`${label} Image`}
                src={imageSources[0]}
                width={300}
                height={400}
                className="rounded-sm"
              />
            </div>
            <Button onClick={onOpen}>View</Button>
          </div>
        </div>
        <div className="h-[10px]" />
      </div>
      <CardDialog open={isOpen} onOpenChange={toggle} houseItem={houseItem} />
    </>
  )
}

interface CardDialogProps {
  open: boolean
  onOpenChange: () => void
  houseItem: HouseItem
}

const CardDialog: FC<CardDialogProps> = ({ open, onOpenChange, houseItem }) => {
  const { imageSources, label, href, ...rest } = houseItem

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full sm:w-[500px]">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
          <DialogDescription>
            <Carousel>
              <CarouselContent>
                {imageSources.map((imageSource, index) => (
                  <CarouselItem
                    key={`carousel image ${index}`}
                    className="center">
                    <Image
                      src={imageSource}
                      alt={`${label} Image ${index}`}
                      width={500}
                      height={300}
                      className={''}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
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
              <li>
                <Link href={href} target="_blank">
                  Link
                </Link>
              </li>
            )}
          </ul>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
