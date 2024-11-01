import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { HouseItem } from '../types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getHouseItemImageUrl = (
  houseItem: string,
  s3IndexKey?: string
) => {
  return `https://7-headington-rd.s3.eu-west-2.amazonaws.com/${
    s3IndexKey ? `${s3IndexKey}/${houseItem}` : houseItem
  }.jpg`
}

export const getMappedHouseItems = (
  houseItems: HouseItem[],
  nestValue: string
) => {
  return houseItems.map((item) => {
    return {
      ...item,
      imageSources: item.imageSources?.map((houseItem) =>
        getHouseItemImageUrl(houseItem, nestValue)
      ),
    }
  })
}
