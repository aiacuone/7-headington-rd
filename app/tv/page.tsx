import { ParagraphImage, Paragraphs } from '@/components/Paragraphs'
import { CustomTabs } from '@/components/ui/CustomTabs'

const Basics = () => {
  const paragraphs = [
    'The TV should be set up to use services such as Netflix and Amazon',
    <ParagraphImage file="tv1" s3RouteIndex="appliances" key="tv" />,
    'It is connected to the Wifi and can be used to stream content from the internet',
    'The TV uses chromecast to stream content from the Internet',
    'You will need to use your own accounts to access the content on the TV',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const Chromecast = () => {
  const paragraphs = [
    'The chromecast should be located on the back of the TV',
    <ParagraphImage
      file="chromecast1"
      s3RouteIndex="appliances"
      key="chromecast"
      size={300}
    />,
    'The chromecast essentially makes the TV a smart TV, it allows you to stream services such as Netflix and Amazon',
    'You will need to use your own accounts to access the content on the TV',
    'The chromecast comes with a remote control.',
    <ParagraphImage
      file="chromecast-remote1"
      s3RouteIndex="appliances"
      key="chromecast"
      size={300}
    />,
    'The remote control should allow you to change the settings on the TV if needed',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const TvPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: <Basics />,
    },
    {
      label: 'Chromecast',
      content: <Chromecast />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default TvPage
