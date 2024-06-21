import { Role } from './types/user'

export const roles: Record<Role, string[]> = {
  [Role.admin]: ['dahya.d@gmail.com'],
  [Role.tenant]: [],
  [Role.agent]: ['aiacuone@gmail.com'],
}
