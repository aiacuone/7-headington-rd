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
  cardsList: HouseItem[]
  s3NestKey: string
}

export const CardGrid: FC<CardGridProps> = ({ cardsList, s3NestKey }) => {
  const getHouseItemImageUrl = (houseItem: string) => {
    return `https://7-headington-rd.s3.eu-west-2.amazonaws.com/${s3NestKey}/${houseItem}.jpg`
  }

  const getMappedHouseItems = (houseItems: HouseItem[]) => {
    return houseItems.map((item) => {
      return {
        ...item,
        imageSources: item.imageSources?.map((houseItem) =>
          getHouseItemImageUrl(houseItem)
        ),
      }
    })
  }

  return (
    <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {getMappedHouseItems(cardsList).map((listItem, index) => {
        return <Card key={`grid item ${index}`} {...listItem} />
      })}
    </div>
  )
}

const Card: FC<HouseItem> = (houseItem) => {
  const { label, imageSources } = houseItem
  const { onOpen, isOpen, toggle } = useDisclosure()

  return (
    <>
      <div>
        <button
          className="flex justify-center bg-muted rounded p-2"
          onClick={onOpen}>
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
        </button>
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
  const showCarousel = imageSources.length > 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full sm:w-[500px]">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
          <DialogDescription>
            {showCarousel ? (
              <Carousel>
                <CarouselContent>
                  {imageSources.map((imageSource, index) => (
                    <CarouselItem
                      key={`carousel image ${index}`}
                      className="center">
                      <DialogImage src={imageSource} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <DialogImage src={imageSources[0]} />
            )}
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

const DialogImage: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="center">
      <Image src={src} alt={'House Item Image'} width={500} height={300} />
    </div>
  )
}
