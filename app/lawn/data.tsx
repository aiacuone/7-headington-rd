import { ParagraphImage, Paragraphs } from '@/components/Paragraphs'

const MowerAndTrimmer = () => {
  const paragraphs = [
    'We have supplied a battery powered mower and trimmer',
    <ParagraphImage
      file="mower2"
      s3RouteIndex="outdoor-equipment"
      key="Mower"
      size={400}
    />,
    <ParagraphImage
      file="trimmer1"
      s3RouteIndex="outdoor-equipment"
      key="Mower"
      size={400}
    />,
    'The they come with 2 batteries and a charger',
    <ParagraphImage
      file="greenworks-batteries-and-charger"
      s3RouteIndex="outdoor-equipment"
      key="lawn image"
    />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const RecommendationsContent = () => {
  const paragraphs = [
    'We recommend to always mow the lawn at the highest level. The mower is battery operated and struggles at lower levels.',
    'We also recommend to mow every 1-2 weeks in summer, and 3-4 weeks depending on the time of year.',
    'If you let the grass grow too high the mower will struggle to cut it.',
    <ParagraphImage file="lawn1" s3RouteIndex="other" key="lawn image" />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const TrimmerLine = () => {
  const paragraphs = [
    <p key="trimmerLineParagraph">
      If there is no trimmer line left, you can purchase more{' '}
      <a href="https://www.amazon.co.uk/Greenworks-Diameter-Trimmers-G40LTK2-G40LTK2x/dp/B07JY5TG5W">
        here
      </a>
    </p>,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const CatcherAndMulcher = () => {
  const paragraphs = [
    'When mowing the lawn, you have the choice between using a catcher and a mulcher',
    <ParagraphImage
      file="catcher-and-mulcher1"
      s3RouteIndex="outdoor-equipment"
      key="catcher and mulcher"
    />,
    'The catcher is useful if the grass is long and you want to collect the clippings',
    <ParagraphImage
      file="catcher1"
      s3RouteIndex="outdoor-equipment"
      key="catcher"
      size={300}
    />,
    'The mulcher is useful if the grass is short and you want to fertilise the lawn.',
    'It also means you dont need to collect any of the grass and empty the clippings into the bin',
    <ParagraphImage
      file="mulcher1"
      s3RouteIndex="outdoor-equipment"
      key="mulcher"
      size={300}
    />,
    'The mulcher goes into the mower like so',
    <ParagraphImage
      file="mulcher2"
      s3RouteIndex="outdoor-equipment"
      key="mulcher"
      size={300}
    />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const lawnTabs = [
  {
    label: 'Recommendations',
    content: <RecommendationsContent />,
  },
  {
    label: 'Mower and Trimmer',
    content: <MowerAndTrimmer />,
  },
  {
    label: 'Trimmer Line',
    content: <TrimmerLine />,
  },
  {
    label: 'Catcher and Mulcher',
    content: <CatcherAndMulcher />,
  },
]
