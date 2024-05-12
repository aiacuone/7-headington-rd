import { ImageGrid } from '@/components/ui/ImageGrid'
import { HouseItem } from '@/lib/types'
import { getMappedHouseItems } from '@/lib/utils'

const OutdoorEquipmentPage = () => {
  const outdoorEquipmentItems: HouseItem[] = [
    {
      label: 'Mower',
      imageSources: ['mower1'],
      brand: 'Greenworks',
      model: 'G40LM41',
    },
    {
      label: 'Trimmer',
      imageSources: ['trimmer1'],
      brand: 'Greenworks',
      model: 'G40LT',
    },
    {
      label: 'Ladder',
      imageSources: ['ladder1'],
      brand: 'Werner',
      height: '6 Foot',
    },
    {
      label: 'Extension Ladder',
      imageSources: ['extension-ladder1'],
    },
    {
      label: 'Broom',
      imageSources: ['broom'],
    },
  ]

  const mappedOutdoorEquipmentItems = getMappedHouseItems(
    outdoorEquipmentItems,
    'outdoor-equipment'
  )

  return <ImageGrid list={mappedOutdoorEquipmentItems} />
}

export default OutdoorEquipmentPage
