import { nextAuthConfiguration } from '@/lib/configurations/nextAuth'
import NextAuth from 'next-auth'

const handler = NextAuth(nextAuthConfiguration)
export { handler as GET, handler as POST }
