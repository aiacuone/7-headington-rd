'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useMainContext } from './Main'

interface CustomTabsProps {
  tabs: Array<{ label: string; content: string | ReactNode }>
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  const { mainContainerHeight } = useMainContext()
  const maxTabContainerHeight = mainContainerHeight - 60 // 60 is the height of the tabs
  const [preventScrollIssue, setPreventScrollIssue] = useState(false)
  const tabsContent = useRef<HTMLDivElement>(null)

  const onResize = useCallback(() => {
    // This is to ensure that when the tab content does not exceed scrollable height, the content is centered
    const tabsContentHeight = tabsContent.current?.clientHeight

    if (tabsContentHeight && tabsContentHeight >= maxTabContainerHeight) {
      setPreventScrollIssue(true)
    } else {
      setPreventScrollIssue(false)
    }
  }, [maxTabContainerHeight, tabsContent])

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
          <TabsTrigger
            value={label}
            key={`tab trigger ${index}`}
            onClick={onResize}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
