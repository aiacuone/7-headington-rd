export enum Role {
  admin = 'admin',
  tenant = 'tenant',
  agent = 'agent',
}

export interface RestrictedPage {
  route: string
  roles: Role[]
}
