'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { doorsTabs } from './data'

const DoorsPage = () => {
  return <CustomTabs tabs={doorsTabs} />
}

export default DoorsPage
