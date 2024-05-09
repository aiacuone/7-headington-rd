import { CustomTabs } from '@/components/ui/CustomTabs'

const SecurityPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: 'Basic info .....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default SecurityPage
