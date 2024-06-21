'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/lib/hooks/useAuth'
import { Role } from '@/lib/types/user'
import { capitalizeString } from '@/lib/utils/string'
import { FC, ReactNode, useState } from 'react'

interface CustomTabsProps {
  tabs: Array<{
    label: string
    content: string | ReactNode
    restrictedRoles?: Role[]
    key?: string
  }>
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  const { role, isAdmin } = useAuth()

  const filteredTabs = tabs.filter(({ restrictedRoles }) => {
    if (!restrictedRoles || isAdmin) return true

    return restrictedRoles.includes(role)
  })

  const showTabsAndHeader = filteredTabs.length > 1
  const [selectedTab, setSelectedTab] = useState(
    filteredTabs[0]?.key ?? filteredTabs[0]?.label ?? ''
  )
  const onChangeTab = (label: string) => setSelectedTab(label)

  return (
    <Tabs
      defaultValue={filteredTabs[0].label}
      value={selectedTab}
      className="w-full sm:w-[650px] stack gap-3 h-full">
      {filteredTabs.map(({ label, content, key, restrictedRoles }, index) => (
        <TabsContent
          value={key ?? label}
          key={`tab content ${index}`}
          className="flex-1 overflow-y-scroll hide-scrollbar">
          <div className="stack h-full">
            <div className="flex-1 center stack gap-10">
              {showTabsAndHeader && (
                <div className="hstack gap-2 items-center">
                  <p className="font-bold text-lg hidden sm:block">
                    {
                      filteredTabs.find(
                        (tab) =>
                          tab.key === selectedTab || tab.label === selectedTab
                      )?.label
                    }
                  </p>
                  {isAdmin &&
                    restrictedRoles?.map((role) => (
                      <p key={role}>({capitalizeString(role)})</p>
                    ))}
                </div>
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
          {filteredTabs.map(({ label, key, restrictedRoles }, index) => (
            <TabsTrigger
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              value={key ?? label}
              key={`tab trigger ${index}`}
              onClick={() => onChangeTab(key ?? label)}>
              <div className="hstack gap-1">
                <p>{label}</p>
                {isAdmin &&
                  restrictedRoles?.map((restrictedRole) => (
                    <p key={`restricted role item ${restrictedRole}`}>
                      ({capitalizeString(restrictedRole)})
                    </p>
                  ))}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </Tabs>
  )
}
