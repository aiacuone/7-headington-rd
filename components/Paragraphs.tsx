import { getHouseItemImageUrl } from '@/lib/utils'
import { ensureFullstop } from '@/lib/utils/string'
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
    <div className="stack gap-3 ">
      {paragraphs.map((paragraph, index) => {
        const isFirstIndex = index === 0
        const isParagraphAString = typeof paragraph === 'string'

        if (isFirstIndex && hasHeader)
          return (
            <p
              key={`paragraph ${index}`}
              className="text-lg sm:text-xl font-bold text-center">
              {paragraph}
            </p>
          )

        if (isParagraphAString)
          return (
            <p className="text-center" key={`paragraph ${index}`}>
              {ensureFullstop(paragraph)}
            </p>
          )

        return paragraph
      })}
    </div>
  )
}

export const ParagraphImage = ({
  file,
  s3RouteIndex,
  size = 500,
}: {
  file: string
  s3RouteIndex?: string
  size?: number
}) => {
  return (
    <div className="center" key="lawn mower image">
      <Image
        src={getHouseItemImageUrl(file, s3RouteIndex)}
        width={size}
        height={size}
        alt={`${file} image`}
        className="rounded"
      />
    </div>
  )
}
