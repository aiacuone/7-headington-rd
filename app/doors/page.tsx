'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { Button } from '@/components/ui/button'
import { FC, useState } from 'react'

const DoorsPage = () => {
  const [value, setValue] = useState('Basics' as string)

  const tabs = [
    {
      label: 'Lock',
      content:
        'Pull the handle all the way up, then turn the locking mechanism anti-clockwise. If you are having issues locking the door, it may be because the handle is not all the way up',
    },
    {
      label: 'Unlock',
      content:
        'Rotate the locking mechanism clockwise, the push the handle down. Note, pushing the handle down from a locked state will have resistance, this is normal.',
    },
    {
      label: 'Keys',
      content: 'There are 3 different keys for the house',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default DoorsPage

interface BasicsTabProps {
  onClick: (label: string) => void
}
