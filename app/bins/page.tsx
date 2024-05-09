import { CustomTabs } from '@/components/ui/CustomTabs'

const BinsPage = () => {
  const tabs = [
    { label: 'When', content: 'The Bins are emptied every Friday' },
    {
      label: 'Recycling',
      content: 'The recycling is only emptied every second Friday',
    },
    {
      label: 'Calendar',
      content: 'Calendar for bins',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default BinsPage
