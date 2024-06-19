'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/lib/hooks/useAuth'
import { FC, ReactNode, useState } from 'react'

interface CustomTabsProps {
  tabs: Array<{
    label: string
    content: string | ReactNode
    isAdminOnly?: boolean
    isTenantOnly?: boolean
    isTenantOrAgentOnly?: boolean
  }>
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  const { isAdmin, isTenant, isAgent } = useAuth()

  const filteredTabs = tabs.filter(
    ({ isAdminOnly, isTenantOrAgentOnly, isTenantOnly }) => {
      if (isAdminOnly) {
        return isAdmin
      }

      if (isTenantOrAgentOnly) {
        return isAdmin || isTenant || isAgent
      }

      if (isTenantOnly) {
        return isAdmin || isTenant
      }

      return true
    }
  )

  const showTabsAndHeader = filteredTabs.length > 1
  const [selectedTab, setSelectedTab] = useState(filteredTabs[0]?.label ?? '')
  const onChangeTab = (label: string) => setSelectedTab(label)

  return (
    <Tabs
      defaultValue={filteredTabs[0].label}
      value={selectedTab}
      className="w-full sm:w-[650px] stack gap-3 h-full">
      {filteredTabs.map(({ label, content }, index) => (
        <TabsContent
          value={label}
          key={`tab content ${index}`}
          className="flex-1 overflow-y-scroll hide-scrollbar">
          <div className="stack h-full">
            <div className="flex-1 center stack gap-10">
              {showTabsAndHeader && (
                <p className="font-bold text-lg">{selectedTab}</p>
              )}
              <div className="bg-muted p-4 rounded">
                {Array.isArray(content) ? (
                  content.map((item, index) => (
                    <div key={`content ${index}`}>{item}</div>
                  ))
                ) : (
                  <div>{content}</div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
      {showTabsAndHeader && (
        <TabsList>
          {filteredTabs.map(({ label }, index) => (
            <TabsTrigger
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              value={label}
              key={`tab trigger ${index}`}
              onClick={() => onChangeTab(label)}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </Tabs>
  )
}
