import { Paragraphs } from '@/components/Paragraphs'

const GettingConnected = () => {
  const paragraphs = [
    <p key="getting connect paragraph">
      To get connected to the security cameras, please send an email{' '}
      <a href="mailTo=aiacuone@gmail.com?subject=7 Headington Rd Security Camera Connection&body=Hello, I am a tenant and would like to get connected to the security cameras using this email address (type email address here please)">
        here
      </a>{' '}
      with your email address
    </p>,
    'Please note, that you will need to download the Eufy application on your phone to get connected',
    'Please provide your preferred email address in the email',
    'Getting connected to the app will enable you to answer the door from your app, it will also enable you to view the cameras and recorded events',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const Privacy = () => {
  const paragraphs = [
    'We respect the privacy you and the people invited to your home.',
    'We dont record any video within the house. The purpose for the cameras is for security and insurance purposes only',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const securityTabs = [
  {
    label: 'Privacy',
    content: <Privacy />,
  },
  {
    label: 'Getting Connected',
    content: <GettingConnected />,
    isTenantOnly: true,
  },
]
