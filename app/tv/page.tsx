import { CustomTabs } from '@/components/ui/CustomTabs'

const TvPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: [
        'The TV should be set up to use services such as Netflix and Amazon',
        'It is connected to the wifi and can be used to stream content from the internet',
        'The TV uses chromecast to stream content from the internet',
      ],
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default TvPage
