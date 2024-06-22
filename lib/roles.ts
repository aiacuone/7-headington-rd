import { Role } from './types/user'

export const roles: Record<Role, string[]> = {
  [Role.admin]: ['aiacuone@gmail.com'],
  [Role.tenant]: ['dahya.d@gmail.com'],
  [Role.agent]: [],
}
