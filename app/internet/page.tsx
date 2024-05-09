import { CustomTabs } from '@/components/ui/CustomTabs'

const InternetPage = () => {
  const tabs = [
    {
      label: 'Password',
      content: 'The current password for the internet is ......',
    },
    {
      label: 'Speed',
      content: 'The current speed of the internet is .....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default InternetPage
