import { navigation } from '../navigation'
import { useAuth } from './useAuth'

export const useFilteredNavigation = () => {
  const { role } = useAuth()

  const filteredNavigation = navigation.filter((page) => {
    if (!page.restrictedRoles) return true

    return page.restrictedRoles.includes(role)
  })

  return filteredNavigation
}
