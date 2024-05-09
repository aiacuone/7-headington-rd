import { CustomTabs } from '@/components/ui/CustomTabs'

const LocksPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: 'Basic info .....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default LocksPage
