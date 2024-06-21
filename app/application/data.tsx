import { Paragraphs } from '@/components/Paragraphs'
import { Role } from '@/lib/types/user'

const Issues = () => {
  return (
    <p>
      If there are any issues with this application, please contact{' '}
      <a href="mailTo:aiacuone@gmail.com?subject=7 Headington Rd Application Issues">
        here
      </a>
    </p>
  )
}

const TenantConnection = () => {
  const paragraphs = [
    'We would like at least one member of the household to be connected to the application',
    <p key="tenantApplicationConnectionParagraph" className="text-center">
      If possible, please ask the tenant for at least one google email, then
      send us an email{' '}
      <a href="mailTo:aiacuone@gmail.com?subject=7 Heading Rd Tenant Application Connection&body=Please provide the tenant google email to get connected to the application">
        here
      </a>{' '}
      and we will get them registered to the application. They should then be
      able to log in.
    </p>,
    'At this point we can only connect google emails to the application. If we need to connect other emails, please let us know and we will see what we can do',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const appIssuesTabs = [
  {
    label: 'Tenant Connection',
    content: <TenantConnection />,
    restrictedRoles: [Role.agent],
  },
  {
    label: 'Issues',
    content: <Issues />,
  },
]
