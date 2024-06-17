'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { internetTabs } from './data'

const InternetPage = () => {
  return <CustomTabs tabs={internetTabs} />
}

export default InternetPage
