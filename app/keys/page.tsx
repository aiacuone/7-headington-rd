'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { ImageAndParagraphs } from '@/components/ui/ImageAndParagraphs'

const KeysPage = () => {
  const tabs = [
    {
      label: 'Keys',
      content: <KeysContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default KeysPage

const KeysContent = () => {
  const keyImageAndParagraphs = [
    ['There are 4 sets of keys', 'all'],
    ['Front Door', 'front'],
    ['Back Door', 'back'],
    ['Shed', 'shed'],
    ['Windows', 'windows'],
  ]

  return <ImageAndParagraphs items={keyImageAndParagraphs} s3IndexKey="keys" />
}
