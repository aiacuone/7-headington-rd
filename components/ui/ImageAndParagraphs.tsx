import { getHouseItemImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

interface ImageAndParagraphsProps {
  items: string[][]
  s3IndexKey?: string
}

export const ImageAndParagraphs: FC<ImageAndParagraphsProps> = ({
  items,
  s3IndexKey,
}) => {
  return (
    <div className="stack gap-6">
      {items.map(([paragraph, houseItem], index) => (
        <div
          key={`keyImageAndParaphs item ${index}`}
          className="center stack bg-muted p-2">
          <p>{paragraph}</p>
          <Image
            src={getHouseItemImageUrl(houseItem, s3IndexKey)}
            width={300}
            height={300}
            alt={'Keys Image'}
            className="rounded"
          />
        </div>
      ))}
    </div>
  )
}
