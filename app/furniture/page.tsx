import { ImageGrid } from '@/components/ui/ImageGrid'
import { HouseItem } from '@/lib/types'

const FurniturePage = () => {
  const furnitureUrl = (url: string) =>
    `https://7-headington-rd.s3.eu-west-2.amazonaws.com/furniture/${url}.jpg`

  const furniture: HouseItem[] = [
    {
      label: 'Table',
      imageSrc: furnitureUrl('table1'),
      brand: 'Diagone',
      model: 'Table Manchester',
    },
    {
      label: 'Couch',
      imageSrc: furnitureUrl('couch2'),
    },
    {
      label: 'Coffee Table',
      imageSrc: furnitureUrl('coffee-table3'),
      brand: 'Birlea',
      model: 'Compton 4 Drawer Coffee Table',
    },
    {
      label: 'Pantry',
      imageSrc: furnitureUrl('pantry1'),
    },
  ]

  return <ImageGrid list={furniture} />
}

export default FurniturePage
