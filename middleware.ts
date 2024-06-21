import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { Role } from './lib/types/user'
import { navigation } from './lib/navigation'

const restrictedPages = navigation
  .filter((page) => page.restrictedRoles)
  .map((page) => page.href)

export const config = {
  matcher: restrictedPages,
}

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const isAdmin = request.nextauth.token?.role === Role.admin
    const isRestrictedPage = restrictedPages.includes(request.nextUrl.pathname)

    if (isRestrictedPage) {
      if (isAdmin) {
        return NextResponse.next()
      }

      const restrictedPage = navigation.find(
        (page) => page.href === request.nextUrl.pathname
      )

      const isUserAuthorized = restrictedPage?.restrictedRoles?.includes(
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
