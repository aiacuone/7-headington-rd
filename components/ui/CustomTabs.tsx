import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC, ReactNode } from 'react'

interface CustomTabsProps {
  tabs: Array<{ label: string; content: string | ReactNode }>
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  return (
    <Tabs
      defaultValue={tabs[0].label}
      className="w-full sm:w-[650px] stack gap-3">
      <TabsList>
        {tabs.map(({ label }, index) => (
          <TabsTrigger value={label} key={`tab trigger ${index}`}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ label, content }, index) => (
        <TabsContent
          value={label}
          key={`tab content ${index}`}
          className="min-h-[450px]">
          {content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
