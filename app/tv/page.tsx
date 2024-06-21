import { ParagraphImage, Paragraphs } from '@/components/Paragraphs'
import { CustomTabs } from '@/components/ui/CustomTabs'

const Basics = () => {
  const paragraphs = [
    'The TV should be set up to use services such as Netflix and Amazon',
    <ParagraphImage
      src="https://7-headington-rd.s3.eu-west-2.amazonaws.com/appliances/tv1.jpg"
      key="tv"
    />,
    'It is connected to the Wifi and can be used to stream content from the internet',
    'The TV uses chromecast to stream content from the Internet',
    'You will need to use your own accounts to access the content on the TV',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const TvPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: <Basics />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default TvPage
