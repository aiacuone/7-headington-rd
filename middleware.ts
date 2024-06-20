import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { Role } from './lib/types/user'

interface RestrictedPageAccessItem {
  route: string
  roles: Role[]
}

export const roleRestrictedPageAccess: RestrictedPageAccessItem[] = [
  { route: '/keys', roles: [Role.agent] },
]

export const config = {
  matcher: roleRestrictedPageAccess.map((route) => route.route),
}

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const restrictedAccessRoute = roleRestrictedPageAccess.find(
      (route) => route.route === request.nextUrl.pathname
    )
    const isRestrictedAccessRoute = !!restrictedAccessRoute

    if (isRestrictedAccessRoute) {
      if (request.nextauth.token?.role === 'admin') {
        return NextResponse.next()
      }

      const isUserAuthorized = restrictedAccessRoute?.roles.includes(
        request.nextauth.token?.role as Role
      )

      if (!isUserAuthorized)
        return NextResponse.rewrite(new URL('/unAuthorised', request.url))
    }
  }
  // {
  //   callbacks: {
  //     authorized: ({ token }) => {
  //       const authorizedRoles = ['admin', 'agent', 'tenant']
  //       return authorizedRoles.includes(token?.role as string)
  //     },
  //   },
  // }
)
