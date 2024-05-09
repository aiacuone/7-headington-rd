import { CustomTabs } from '@/components/ui/CustomTabs'

const TvPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content:
        'We have not supplied a TV license. If you require a TV license, please contact us here....',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default TvPage
