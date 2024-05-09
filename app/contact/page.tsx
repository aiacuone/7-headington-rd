import { CustomTabs } from '@/components/ui/CustomTabs'

const ContactPage = () => {
  const tabs = [
    {
      label: 'Agency',
      content: 'Contact number for agency',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default ContactPage
