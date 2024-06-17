import { CardGrid } from '@/components/ui/CardGrid'
import { furnitureItems } from './data'

const FurniturePage = () => {
  return <CardGrid cardsList={furnitureItems} s3NestKey="furniture" />
}

export default FurniturePage
