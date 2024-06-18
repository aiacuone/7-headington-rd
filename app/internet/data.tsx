import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Clipboard } from 'lucide-react'

const PasswordContent = () => {
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

const SpeedContent = () => {
  return (
    <div>
      <p>
        The contract with the provider is for <b>500mbps</b>, but regular speeds
        reach <b>900mbps</b>
      </p>
    </div>
  )
}

const RouterContent = () => {
  const mappingData = [
    ['Brand', 'TP Link'],
    ['Model', 'HX220'],
    ['Standard', 'AX1800'],
    ['Frequency', '2.5 and 5Ghz'],
  ]
  return (
    <div>
      {mappingData.map(([key, value], index) => (
        <div
          className="hstack gap-3"
          key={`router content mapping data ${index}`}>
          <p>
            <b>{key}:</b>
          </p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  )
}

const ConnectingToRouter = () => {
  const { toast } = useToast()
  const copyToClipboard = () => {
    navigator.clipboard.writeText('Ghost97Mount')
    toast({ title: 'Copied to clipboard' })
  }

  const mappingData = [
    [
      'Router Settings',
      <a
        href="http://tplinkwifi.net/"
        key="router settings link"
        target="_blank">
        Link
      </a>,
    ],
    [
      'Router Settings Password',
      <div className="hstack center gap-3" key="router settings link">
        <p>Ghost97Mount</p>
        <Button onClick={copyToClipboard} className="h-8">
          <Clipboard size="15px" />
        </Button>
      </div>,
      'Ghost97Mount',
    ],
  ]

  return (
    <div>
      {mappingData.map(([key, value], index) => (
        <div
          className="hstack gap-3"
          key={`router content mapping data ${index}`}>
          <p>
            <b>{key}:</b>
          </p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  )
}

export const internetTabs = [
  {
    label: 'Password',
    content: <PasswordContent />,
    isTenantOnly: true,
  },
  {
    label: 'Speed',
    content: <SpeedContent />,
  },
  {
    label: 'Router',
    content: <RouterContent />,
  },
  {
    label: 'Connecting to Router',
    content: <ConnectingToRouter />,
    isAdminOnly: true,
  },
]
