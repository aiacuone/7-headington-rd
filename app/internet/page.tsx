'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Clipboard } from 'lucide-react'

const InternetPage = () => {
  const tabs = [
    {
      label: 'Password',
      content: <PasswordContent />,
    },
    {
      label: 'Speed',
      content: <SpeedContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default InternetPage

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
