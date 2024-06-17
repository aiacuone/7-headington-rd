import { CardGrid } from '@/components/ui/CardGrid'
import { applianceItems } from './data'

const AppliancesPage = () => {
  return <CardGrid cardsList={applianceItems} s3NestKey="appliances" />
}

export default AppliancesPage
