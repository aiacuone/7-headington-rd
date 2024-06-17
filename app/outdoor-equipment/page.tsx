import { CardGrid } from '@/components/ui/CardGrid'
import { outdoorEquipmentItems } from './data'

const OutdoorEquipmentPage = () => {
  return (
    <CardGrid cardsList={outdoorEquipmentItems} s3NestKey="outdoor-equipment" />
  )
}

export default OutdoorEquipmentPage
