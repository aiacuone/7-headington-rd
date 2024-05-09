import { CustomTabs } from '@/components/ui/CustomTabs'

const DishwasherPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: 'Basic info .....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default DishwasherPage
