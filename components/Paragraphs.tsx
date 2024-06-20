import Image from 'next/image'
import { ReactNode } from 'react'

interface ParagraphProps {
  paragraphs: (string | ReactNode)[]
  hasHeader?: boolean
}

export const Paragraphs = ({
  paragraphs,
  hasHeader = false,
}: ParagraphProps) => {
  return (
    <div className="stack gap-3 text-center">
      {paragraphs.map((paragraph, index) => {
        const isFirstIndex = index === 0
        const isParagraphAString = typeof paragraph === 'string'

        if (isFirstIndex && hasHeader)
          return (
            <p
              key={`paragraph ${index}`}
              className="text-lg sm:text-xl font-bold">
              {paragraph}
            </p>
          )

        if (isParagraphAString)
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
