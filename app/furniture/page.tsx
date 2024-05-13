import { CardGrid } from '@/components/ui/CardGrid'
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
      imageSources: ['couch1'],
    },
    {
      label: 'Coffee Table',
      imageSources: ['coffee-table1', 'coffee-table2'],
      brand: 'Birlea',
      model: 'Compton 4 Drawer Coffee Table',
    },
    {
      label: 'Pantry',
      imageSources: ['pantry1'],
    },
  ]

  const mappedFurnitureItems = getMappedHouseItems(furnitureItems, 'furniture')

  return <CardGrid list={mappedFurnitureItems} />
}

export default FurniturePage
