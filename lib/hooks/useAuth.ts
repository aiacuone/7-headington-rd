import { useSession } from 'next-auth/react'

enum Roles {
  admin = 'admin',
  tenant = 'tenant',
  agent = 'agent',
}

export const useAuth = () => {
  const { data } = useSession()

  const roles: Partial<Record<Roles, string[]>> = {
    admin: ['aiacuone@gmail.com', 'dahya.d@gmail.com'],
    tenant: [],
    agent: [],
  }
  const email = data?.user?.email

  const isAdmin = roles.admin?.includes(email as string)
  const isTenant = roles.tenant?.includes(email as string)
  const isAgent = roles.agent?.includes(email as string)

  return {
    isAdmin,
    isTenant,
    isAgent,
    hasAccess: isAdmin || isTenant || isAgent,
    isSignedIn: !!data,
  }
}
