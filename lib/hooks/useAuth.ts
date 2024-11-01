import { useSession } from 'next-auth/react'
import { Role } from '../types/user'

export const useAuth = () => {
  const { data, status } = useSession()

  const isAdmin = data?.user.role === Role.admin
  const isTenant = data?.user.role === Role.tenant
  const isAgent = data?.user.role === Role.agent

  return {
    isAdmin,
    isTenant,
    isAgent,
    isSignedIn: !!data,
    role: data?.user.role as Role,
    isLoading: status === 'loading',
  }
}
