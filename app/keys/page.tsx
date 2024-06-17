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
  const getKeysUrl = (key: string) =>
    `https://7-headington-rd.s3.eu-west-2.amazonaws.com/keys/${key}.jpg`
  const keyImageAndParagraphs = [
    ['There are 4 sets of keys', getKeysUrl('all')],
    ['Back Door', getKeysUrl('back')],
    ['Front Door', getKeysUrl('front')],
    ['Shed', getKeysUrl('shed')],
    ['Windows', getKeysUrl('windows')],
  ]
  return <ImageAndParagraphs items={keyImageAndParagraphs} />
}
