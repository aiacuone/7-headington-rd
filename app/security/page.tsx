import { CustomTabs } from '@/components/ui/CustomTabs'

const SecurityPage = () => {
  const tabs = [
    {
      label: 'Privacy',
      content:
        'We respect the privacy you and the people invited to your home. We dont record any video within the house. The purpose for the cameras is for security and insurance purposes only',
    },
    {
      label: 'Getting Connected',
      content: GettingConnectedContent(),
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default SecurityPage

const GettingConnectedContent = () => {
  return (
    <div className="stack gap-3">
      <p>
        To get connected to the security cameras, please send an email{' '}
        <a href="mailTo=aiacuone@gmail.com?subject=7 Headington Rd Security Camera Connection&body=Hello, I am a tenant and would like to get connected to the security cameras using this email address (type email address here please)">
          here
        </a>{' '}
        with your email address
      </p>
      <p>
        Please note, that you will need to download the Eufy application on your
        phone to get connected
      </p>
      <p>
        Please provide your email address, and confirm that you are the tenant
        of the house you wil get connected
      </p>
      <p>
        Getting connected to the app will enable you to answer the door from
        your app, it will also enable you to view the cameras and recorded
        events
      </p>
    </div>
  )
}
