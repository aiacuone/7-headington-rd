'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { thermostatTabs } from './data'

const ThermostatPage = () => {
  return <CustomTabs tabs={thermostatTabs} />
}

export default ThermostatPage
