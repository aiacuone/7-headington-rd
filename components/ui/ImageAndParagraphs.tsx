import Image from 'next/image'
import { FC } from 'react'

interface ImageAndParagraphsProps {
  items: string[][]
}

export const ImageAndParagraphs: FC<ImageAndParagraphsProps> = ({ items }) => {
  return (
    <div className="stack gap-6">
      {items.map(([paragraph, imageSource], index) => (
        <div
          key={`keyImageAndParaphs item ${index}`}
          className="center stack bg-muted p-2">
          <p>{paragraph}</p>
          <Image
            src={imageSource}
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
