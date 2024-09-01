import { ParagraphImage, Paragraphs } from '@/components/Paragraphs'
import { KeyValuePair, KeyValuePairs } from '@/components/ui/KeyValuePairs'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Role } from '@/lib/types/user'
import { Clipboard } from 'lucide-react'

const Password = () => {
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText('7TonnesOfHeading2023')
    toast({ title: 'Copied to clipboard' })
  }
  return (
    <div className="hstack gap-3 center">
      <p>
        <b>Wifi:</b>
      </p>
      <p>7TonnesOfHeading2023</p>
      <Button onClick={copyToClipboard} size="sm">
        <Clipboard size="20px" />
      </Button>
    </div>
  )
}

const Speed = () => {
  return (
    <div>
      <p>
        The contract with the provider is for <b>60mbps</b>
      </p>
    </div>
  )
}

const Router = () => {
  const keyValuePairs = [
    ['Brand', 'TP Link'],
    ['Model', 'HX220'],
    ['Standard', 'AX1800'],
    ['Frequency', '2.5 and 5Ghz'],
    [
      'Password',
      'We are not providing the password for the router. Please do not attempt to change any settings regarding the router. Changing settings to the router poses a security risk due to the security cameras being connected to the wifi. If there are any issues with the wifi, please contact the agent.',
    ],
  ]

  const paragraphs = [
    <KeyValuePairs
      keyValuePairs={keyValuePairs}
      mappingKey="router"
      key="routerKeyValuePairs"
    />,
    <ParagraphImage
      file="router1"
      s3RouteIndex="appliances"
      key="router image"
    />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const ConnectingToRouter = () => {
  const { toast } = useToast()
  const copyToClipboard = () => {
    navigator.clipboard.writeText(process.env.ROUTER_PASSWORD as string)
    toast({ title: 'Copied to clipboard' })
  }

  const keyValuePairs: KeyValuePair[] = [
    [
      'Router Settings',
      <a
        href="http://tplinkwifi.net/"
        key="router settings link"
        target="_blank"
      >
        Link
      </a>,
    ],
    [
      'Router Password',
      <div className="hstack center gap-3" key="router settings link">
        <p>{process.env.ROUTER_PASSWORD}</p>
        <Button onClick={copyToClipboard} className="h-8">
          <Clipboard size="15px" />
        </Button>
      </div>,
    ],
  ]

  const paragraphs = [
    <KeyValuePairs
      keyValuePairs={keyValuePairs}
      mappingKey="router"
      key="routerKeyValuePairs"
    />,
    <ParagraphImage
      file="router2"
      s3RouteIndex="appliances"
      key="router image"
    />,
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const internetTabs = [
  {
    label: 'Password',
    content: <Password />,
    restrictedRoles: [Role.tenant],
  },
  {
    label: 'Speed',
    content: <Speed />,
  },
  {
    label: 'Router',
    content: <Router />,
  },
  {
    label: 'Router Connection',
    content: <ConnectingToRouter />,
    restrictedRoles: [Role.admin],
  },
]
