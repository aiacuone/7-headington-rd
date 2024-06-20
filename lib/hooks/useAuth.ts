import { useSession } from 'next-auth/react'
import { Role } from '../types/user'

export const useAuth = () => {
  const { data } = useSession()

  const isAdmin = data?.user.role === Role.admin
  const isTenant = data?.user.role === Role.tenant
  const isAgent = data?.user.role === Role.agent

  return {
    isAdmin,
    isTenant,
    isAgent,
    hasAccess: isAdmin || isTenant || isAgent,
    isSignedIn: !!data,
  }
}

export const roles: Record<Role, string[]> = {
  [Role.admin]: ['aiacuone@gmail.com', 'dahya.d@gmail.com'],
  [Role.tenant]: [],
  [Role.agent]: [],
}
