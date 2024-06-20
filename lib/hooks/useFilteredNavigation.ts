import { navigation } from '../navigation'
import { useAuth } from './useAuth'

export const useFilteredNavigation = () => {
  const { role, isAdmin } = useAuth()

  const filteredNavigation = navigation.filter((page) => {
    if (!page.restrictedRoles || isAdmin) return true

    return page.restrictedRoles.includes(role)
  })

  return filteredNavigation
}
