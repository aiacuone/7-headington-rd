'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC, ReactNode, useRef, useState } from 'react'

interface CustomTabsProps {
  tabs: Array<{ label: string; content: string | ReactNode }>
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  const [preventScrollIssue, setPreventScrollIssue] = useState(false)
  const tabsContent = useRef<HTMLDivElement>(null)

  return (
    <Tabs
      defaultValue={tabs[0].label}
      className="w-full sm:w-[650px] stack gap-3 h-full">
      {tabs.map(({ label, content }, index) => (
        <TabsContent
          value={label}
          key={`tab content ${index}`}
          className="flex-1 overflow-y-scroll hide-scrollbar">
          <div
            className="stack h-full"
            style={{
              justifyContent: preventScrollIssue ? 'start' : 'center',
            }}>
            <div id="tabs-content" ref={tabsContent}>
              {content}
            </div>
          </div>
        </TabsContent>
      ))}
      <TabsList>
        {tabs.map(({ label }, index) => (
          <TabsTrigger value={label} key={`tab trigger ${index}`}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
