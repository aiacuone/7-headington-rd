import { CustomTabs } from '@/components/ui/CustomTabs'

const WashingMachinePage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: 'Basic info .....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default WashingMachinePage
