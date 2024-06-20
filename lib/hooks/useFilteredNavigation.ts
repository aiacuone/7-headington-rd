import { navigation } from '../navigation'
import { useAuth } from './useAuth'

export const useFilteredNavigation = () => {
  const { isAgent, isAdmin } = useAuth()

  return navigation.filter(
    (item) => !item.isAgentOnly || (item.isAgentOnly && (isAgent || isAdmin))
  )
}
