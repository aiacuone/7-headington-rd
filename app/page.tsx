'use client'

import { Paragraphs } from '@/components/Paragraphs'
import { CustomTabs } from '@/components/ui/CustomTabs'
import { Role } from '@/lib/types/user'

export default function Home() {
  const tabs = [
    {
      label: 'Welcome',
      content: <TenantWelcome />,
      key: 'tenant-welcome',
      restrictedRoles: [Role.tenant],
    },
    {
      label: 'Welcome',
      content: <AgentWelcome />,
      key: 'agent-welcome',
      restrictedRoles: [Role.agent],
    },
  ]

  return <CustomTabs tabs={tabs} />
}

const TenantWelcome = () => {
  const paragraphs = [
    'Welcome to 7 Headington Rd',
    'One of the purposes of this application is to make your time living in the property as easy as possible and to provide you with as much information as you need to feel comfortable and safe',
    'Please note, the information on this application will change depending on the user that is signed in, so you as the tenant will not always see the same information as the agent',
    'Please click on the button at the bottom of the application to get started',
  ]

  return (
    <div className="stack gap-3">
      <Paragraphs paragraphs={paragraphs} hasHeader />
    </div>
  )
}

const AgentWelcome = () => {
  const paragraphs = [
    'Welcome to 7 Headington Rd',
    'Thank you for taking the time to view this application.',
    'The purpose of this application is to provide you and everyone involved with the property as much information as possible to make the process of managing and living within the property as easy as possible',
    'Please note, the information on this application will change depending on the user that is signed in, so you as the agent will not always see the same information as the tenant',
    'Please click on the button at the bottom of the application to get started',
  ]

  return (
    <div className="stack gap-3">
      <Paragraphs paragraphs={paragraphs} hasHeader />
    </div>
  )
}
