'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { internetTabs } from './data'

const InternetPage = () => {
  console.log({
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  })
  return <CustomTabs tabs={internetTabs} />
}

export default InternetPage
