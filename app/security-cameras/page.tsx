import { CardGrid } from '@/components/ui/CardGrid'
import { securityCameraItems } from './data'

const AppliancesPage = () => {
  return (
    <CardGrid cardsList={securityCameraItems} s3NestKey="security-cameras" />
  )
}

export default AppliancesPage
