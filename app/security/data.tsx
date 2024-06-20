import { Paragraphs } from '@/components/Paragraphs'
import { Role } from '@/lib/types/user'

const GettingConnected = () => {
  const getConnectedHref =
    'mailTo=aiacuone@gmail.com?subject=7 Headington Rd Security Camera Connection&body=Hello, I am a tenant and would like to get connected to the security cameras using this email address (type email address here please)'

  const paragraphs = [
    <p key="getting connect paragraph">
      To get connected to the security cameras, please send an email{' '}
      <a href={getConnectedHref}>here</a> with the email address you used to
      connect to the Eufy application
    </p>,
    'Please note, that you will need to download the Eufy application on your phone to get connected',
    'Getting connected to the app will enable you to answer the door from the app, it will also enable you to view the cameras and recorded events',
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
    restrictedRoles: [Role.tenant],
  },
]
