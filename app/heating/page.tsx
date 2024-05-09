import { CustomTabs } from '@/components/ui/CustomTabs'

const HeatingPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: 'Basic info .....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default HeatingPage
