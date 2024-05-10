import { ImageGrid } from '@/components/ui/ImageGrid'
import { ScrollablePage } from '@/components/ui/ScrollablePage'

const FurniturePage = () => {
  const furnitureUrl = (url: string) =>
    `https://7-headington-rd.s3.eu-west-2.amazonaws.com/furniture/${url}.jpg`

  const furniture = [
    {
      label: 'Table',
      imageSrc: furnitureUrl('table1'),
    },
    {
      label: 'Couch',
      imageSrc: furnitureUrl('couch2'),
    },
    {
      label: 'Coffee Table',
      imageSrc: furnitureUrl('coffee-table3'),
    },
    {
      label: 'Pantry',
      imageSrc: furnitureUrl('pantry1'),
    },
  ]

  return <ImageGrid list={furniture} />
}

export default FurniturePage
