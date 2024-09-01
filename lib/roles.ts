import { Role } from './types/user'

export const roles: Record<Role, string[]> = {
  [Role.admin]: ['aiacuone@gmail.com', 'dahya.d@gmail.com'],
  [Role.tenant]: ['bolajiiyiola@gmail.com'],
  [Role.agent]: [],
}
