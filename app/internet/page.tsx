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
      content:
        'The contract with the provider is for 500mbps, but regular speeds reach 900mbps',
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
        <Clipboard />
      </Button>
    </div>
  )
}
