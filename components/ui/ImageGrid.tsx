import { HouseItem } from '@/lib/types'
import { capitalizeString } from '@/lib/utils/string'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ImageGridProps {
  list: HouseItem[]
}

export const ImageGrid: FC<ImageGridProps> = ({ list }) => {
  return (
    <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((listItem, index) => (
        <GridItem key={`grid item ${index}`} {...listItem} />
      ))}
    </div>
  )
}

const GridItem: FC<HouseItem> = ({ label, imageSources, href, ...rest }) => {
  return (
    <div>
      <div className="flex justify-center bg-muted rounded p-2">
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
