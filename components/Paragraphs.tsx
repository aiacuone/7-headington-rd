import { ReactNode } from 'react'

export const Paragraphs = ({
  paragraphs,
}: {
  paragraphs: (string | ReactNode)[]
}) => {
  return (
    <div className="stack gap-3">
      {paragraphs.map((paragraph, index) => {
        return <p key={`paragraph ${index}`}>{paragraph}</p>
      })}
    </div>
  )
}
