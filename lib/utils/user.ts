import { roles } from '../roles'
import { Role } from '../types/user'

export const getUserRole = (email: string) => {
  if (roles.admin.includes(email)) return Role.admin
  if (roles.tenant.includes(email)) return Role.tenant
  if (roles.agent.includes(email)) return Role.agent

  return null
}
