import { ListItems } from '@/components/ListItems'
import { Paragraphs } from '@/components/Paragraphs'
import { Role } from '@/lib/types/user'

const getConnectedHref =
  'mailTo=aiacuone@gmail.com?subject=7 Headington Rd Security Camera Connection&body=Please provide your email address used to connect to the Eufy application'

const GettingConnectedTenant = () => {
  const paragraphs = [
    'If you wish to get connected to the security cameras, please contact the agent',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const GettingConnectedAgent = () => {
  const list = [
    'Download the Eufy application on your phone',
    'Take note of the email address used to connect to the Eufy application',
    <p key="security list item">
      Send me an email <a href={getConnectedHref}>here</a> with the email used
      to get connected to the app
    </p>,
    'I will then send an invite to connect to the cameras',
  ]

  const paragraphs = [
    'If either you or the tenant would like to get connected to the security cameras, please follow these steps:',
    <ListItems list={list} key="security list items" />,
    'Please note, I will be directing the tenant to you as the agent to get connected to the cameras, this will you will have control over who does or doesnt get connected',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const PrivacyTenant = () => {
  const paragraphs = [
    'We respect the privacy you and the people invited to your home.',
    'We dont record any video within the house. The purpose for the cameras is for security and insurance purposes only',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const PrivacyAgent = () => {
  const paragraphs = [
    'We respect the privacy of the tenant and the people invited to their home.',
    'We dont record any video within the house. The purpose for the cameras is for security and insurance purposes only',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const securityTabs = [
  {
    label: 'Privacy',
    content: <PrivacyTenant />,
    restrictedRoles: [Role.tenant],
    key: 'privacy-tenant',
  },
  {
    label: 'Privacy',
    content: <PrivacyAgent />,
    restrictedRoles: [Role.agent],
    key: 'privacy-agent',
  },
  {
    label: 'Getting Connected',
    content: <GettingConnectedTenant />,
    restrictedRoles: [Role.tenant],
    key: 'getting-connected-tenant',
  },
  {
    label: 'Getting Connected',
    content: <GettingConnectedAgent />,
    restrictedRoles: [Role.agent],
    key: 'getting-connected-agent',
  },
]
