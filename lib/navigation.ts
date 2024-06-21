import { Role } from './types/user'

interface NavigationItem {
  text: string
  href: string
  restrictedRoles?: Role[]
}

export const navigation: NavigationItem[] = [
  { text: 'Keys', href: '/keys', restrictedRoles: [Role.agent] },
  { text: 'Bins', href: '/bins' },
  { text: 'Application Issues', href: '/app-issues' },
  { text: 'Thermostat', href: '/thermostat' },
  { text: 'Internet', href: '/internet' },
  { text: 'Doors', href: '/doors', restrictedRoles: [Role.agent] },
  { text: 'Lawn', href: '/lawn', restrictedRoles: [Role.tenant] },
  { text: 'Security', href: '/security' },
  { text: 'TV', href: '/tv', restrictedRoles: [Role.tenant] },
  { text: 'Furniture', href: '/furniture' },
  { text: 'Appliances', href: '/appliances' },
  { text: 'Outdoor Equipment', href: '/outdoor-equipment' },
  {
    text: 'Security Cameras',
    href: '/security-cameras',
    restrictedRoles: [Role.agent],
  },
]
