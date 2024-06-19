import Image from 'next/image'
import { ReactNode } from 'react'

export const Paragraphs = ({
  paragraphs,
}: {
  paragraphs: (string | ReactNode)[]
}) => {
  return (
    <div className="stack gap-3 text-center">
      {paragraphs.map((paragraph, index) => {
        if (typeof paragraph === 'string')
          return <p key={`paragraph ${index}`}>{paragraph}</p>

        return paragraph
      })}
    </div>
  )
}

export const ParagraphImage = ({
  src,
  key,
  size = 500,
}: {
  src: string
  key: string
  size?: number
}) => {
  return (
    <div className="center" key="lawn mower image">
      <Image
        src={src}
        width={size}
        height={size}
        alt={`${key} image`}
        className="rounded"
      />
    </div>
  )
}
