import { HouseItem } from '@/lib/types'
import Image from 'next/image'
import { FC } from 'react'

interface ImageGridProps {
  list: HouseItem[]
}

export const ImageGrid: FC<ImageGridProps> = ({ list }) => {
  return (
    <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {list.map(({ label, imageSrc }, index) => (
        <GridItem
          key={`grid item ${index}`}
          label={label}
          imageSrc={imageSrc}
        />
      ))}
    </div>
  )
}

interface GridItemsProps extends Record<string, string> {
  label: string
  imageSrc: string
}

const GridItem: FC<GridItemsProps> = ({ label, imageSrc, ...rest }) => {
  return (
    <div className="flex justify-center">
      <div className="stack gap-3">
        <h3>{label}</h3>
        <div className="center">
          <Image
            alt={`${label} Image`}
            src={imageSrc}
            width={300}
            height={300}
            className="rounded-sm"
          />
        </div>
        <ul>
          {Object.entries(rest).map(([key, value], index) => (
            <li key={`item ${index}`}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
