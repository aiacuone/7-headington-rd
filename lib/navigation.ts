interface NavigationItem {
  text: string
  href: string
  isAgentOnly?: boolean
}

export const navigation: NavigationItem[] = [
  { text: 'Keys', href: '/keys' },
  // { text: 'Keys', href: '/keys', isAgentOnly: true },
  { text: 'Bins', href: '/bins' },
  { text: 'Contact', href: '/contact' },
  { text: 'Thermostat', href: '/thermostat' },
  { text: 'Internet', href: '/internet' },
  { text: 'Doors', href: '/doors' },
  { text: 'Lawn', href: '/lawn' },
  { text: 'Security', href: '/security' },
  { text: 'TV', href: '/tv' },
  { text: 'Furniture', href: '/furniture' },
  { text: 'Appliances', href: '/appliances' },
  { text: 'Outdoor Equipment', href: '/outdoor-equipment' },
]
