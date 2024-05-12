import { ImageGrid } from '@/components/ui/ImageGrid'
import { HouseItem } from '@/lib/types'

const OutdoorEquipmentPage = () => {
  const outdoorEquipmentUrl = (url: string) =>
    `https://7-headington-rd.s3.eu-west-2.amazonaws.com/outdoor-equipment/${url}.jpg`

  const furniture: HouseItem[] = [
    {
      label: 'Mower',
      imageSrc: outdoorEquipmentUrl('mower1'),
    },
    {
      label: 'Trimmer',
      imageSrc: outdoorEquipmentUrl('trimmer1'),
    },
    {
      label: 'Ladder',
      imageSrc: outdoorEquipmentUrl('ladder1'),
    },
    {
      label: 'Extension Ladder',
      imageSrc: outdoorEquipmentUrl('extension-ladder1'),
    },
    {
      label: 'Broom',
      imageSrc: outdoorEquipmentUrl('broom'),
    },
  ]

  return <ImageGrid list={furniture} />
}

export default OutdoorEquipmentPage
