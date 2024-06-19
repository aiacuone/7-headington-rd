import { ReactNode } from 'react'

export const Paragraphs = ({
  paragraphs,
}: {
  paragraphs: (string | ReactNode)[]
}) => {
  return (
    <div className="stack gap-3">
      {paragraphs.map((paragraph, index) => {
        if (typeof paragraph === 'string')
          return <p key={`paragraph ${index}`}>{paragraph}</p>

        return paragraph
      })}
    </div>
  )
}
