import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

enum Roles {
  admin = 'admin',
  tenant = 'tenant',
  guest = 'guest',
}

export const useUserRole = () => {
  const [role, setRole] = useState<Roles>(Roles.guest)

  useEffect(() => {
    const getUserRole = async () => {
      const session = await getSession()
      const email = session?.user?.email

      if (roles.admin?.includes(email as string)) {
        setRole(Roles.admin)
      }

      if (roles.tenant?.includes(email as string)) {
        setRole(Roles.tenant)
      }
    }
    void getUserRole()
  })

  const roles: Partial<Record<Roles, string[]>> = {
    admin: ['aiacuone@gmail.com', 'dahya.d@gmail.com'],
    tenant: [],
  }

  return role
}
