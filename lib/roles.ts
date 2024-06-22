import { Role } from './types/user'

export const roles: Record<Role, string[]> = {
  [Role.admin]: ['aiacuone@gmail.com', 'dahya.d@gmail.com'],
  [Role.tenant]: [],
  [Role.agent]: ['marina.carter@wardsofkent.co.uk'],
}

// 'dahya.d@gmail.com'
