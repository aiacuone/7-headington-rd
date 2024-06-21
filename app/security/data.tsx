import { ListItems } from '@/components/ListItems'
import { ParagraphImage, Paragraphs } from '@/components/Paragraphs'
import { CardGrid } from '@/components/ui/CardGrid'
import { HouseItem } from '@/lib/types'
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
    'Please allow me to direct the tenant to you to get connected to the app. You as the agent will know who the tenant is and what their email is, you can then pass that information to me and I will connect them',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const PrivacyTenant = () => {
  const paragraphs = [
    'We respect the privacy of you and the people invited to your home.',
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

const Cameras = () => {
  const securityCameraItems: HouseItem[] = [
    {
      label: 'Front Door',
      imageSources: ['door-camera2', 'door-camera1'],
    },
    {
      label: 'Backyard',
      imageSources: ['backyard-camera2', 'backyard-camera1'],
    },
    {
      label: 'Garage',
      imageSources: ['garage-camera2', 'garage-camera1'],
    },
    {
      label: 'Side Door',
      imageSources: ['side-camera1', 'side-camera2'],
    },
  ]
  return (
    <CardGrid
      cardsList={securityCameraItems}
      s3NestKey="security-cameras"
      className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
    />
  )
}

const DoorChime = () => {
  const paragraphs = [
    'The security system uses a door chime that plugs into a socket outlet',
    <ParagraphImage
      file="door-chime1"
      s3RouteIndex="appliances"
      key="door chime"
      size={300}
    />,
    <ParagraphImage
      file="door-chime2"
      s3RouteIndex="appliances"
      key="door chime"
      size={300}
    />,
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
  {
    label: 'Cameras',
    content: <Cameras />,
    restrictedRoles: [Role.agent],
  },
  {
    label: 'Door Chime',
    content: <DoorChime />,
  },
]
