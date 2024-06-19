import { ParagraphImage, Paragraphs } from '@/components/Paragraphs'
import Image from 'next/image'

const Mower = () => {
  const paragraphs = [
    'We have supplied a battery powered mower and trimmer',
    <ParagraphImage
      src="https://7-headington-rd.s3.eu-west-2.amazonaws.com/outdoor-equipment/mower2.jpg"
      key="Mower"
      size={400}
    />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const RecommendationsContent = () => {
  const paragraphs = [
    'We recommend to mow the lawn every 2-4 weeks at the highest level depending on the time of year, this will mean that the lawn will be maintained at a height the mower can easily cut.',
    <ParagraphImage
      src="https://7-headington-rd.s3.eu-west-2.amazonaws.com/other/lawn.jpg"
      key="Lawn"
    />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const lawnTabs = [
  {
    label: 'Mower',
    content: <Mower />,
  },
  {
    label: 'Recommendations',
    content: <RecommendationsContent />,
  },
]
