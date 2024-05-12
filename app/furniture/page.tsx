import { ImageGrid } from '@/components/ui/ImageGrid'
import { HouseItem } from '@/lib/types'
import { getMappedHouseItems } from '@/lib/utils'

const FurniturePage = () => {
  const furnitureItems: HouseItem[] = [
    {
      label: 'Table',
      imageSources: ['table1'],
      brand: 'Diagone',
      model: 'Table Manchester',
    },
    {
      label: 'Couch',
      imageSources: ['couch2'],
    },
    {
      label: 'Coffee Table',
      imageSources: ['coffee-table3'],
      brand: 'Birlea',
      model: 'Compton 4 Drawer Coffee Table',
    },
    {
      label: 'Pantry',
      imageSources: ['pantry1'],
    },
  ]

  const mappedFurnitureItems = getMappedHouseItems(furnitureItems, 'furniture')

  return <ImageGrid list={mappedFurnitureItems} />
}

export default FurniturePage
