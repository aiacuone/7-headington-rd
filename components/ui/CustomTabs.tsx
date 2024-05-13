'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC, ReactNode } from 'react'

interface CustomTabsProps {
  tabs: Array<{ label: string; content: string | ReactNode }>
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  const showTabs = tabs.length > 1
  return (
    <Tabs
      defaultValue={tabs[0].label}
      className="w-full sm:w-[650px] stack gap-3 h-full">
      {tabs.map(({ label, content }, index) => (
        <TabsContent
          value={label}
          key={`tab content ${index}`}
          className="flex-1 overflow-y-scroll hide-scrollbar">
          <div className="stack h-full">
            <div className="flex-1 center">{content}</div>
          </div>
        </TabsContent>
      ))}
      {showTabs && (
        <TabsList>
          {tabs.map(({ label }, index) => (
            <TabsTrigger value={label} key={`tab trigger ${index}`}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </Tabs>
  )
}
