import { CustomTabs } from '@/components/ui/CustomTabs'

const SecurityPage = () => {
  const tabs = [
    {
      label: 'Privacy',
      content:
        'We respect the privacy you and the people invited to your home. We dont record any video within the house. The purpose for the cameras is for security and insurance purposes only',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default SecurityPage
