import { Paragraphs } from '@/components/Paragraphs'
import { CustomTabs } from '@/components/ui/CustomTabs'

const Basics = () => {
  const paragraphs = [
    'The TV should be set up to use services such as Netflix and Amazon',
    'It is connected to the Wifi and can be used to stream content from the internet',
    'The TV uses chromecast to stream content from the Internet',
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
