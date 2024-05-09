import { CustomTabs } from '@/components/ui/CustomTabs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  const tabs = [{ label: 'Home', content: 'Welcome' }]

  return <CustomTabs tabs={tabs} />
}
