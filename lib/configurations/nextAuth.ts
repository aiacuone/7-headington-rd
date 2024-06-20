import { NextAuthOptions } from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { roles } from '../hooks/useAuth'
import { getUserRole } from '../utils/user'
// import EmailProvider from 'next-auth/providers/email'

export const nextAuthConfiguration: NextAuthOptions = {
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile: (profile) => {
        const role = getUserRole(profile.email as string)

        return { ...profile, id: profile.at_hash, role }
      },
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>',
    // }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const allowedUsers = roles.admin.concat(roles.tenant, roles.agent)

      if (allowedUsers.includes(user.email as string)) {
        return true
      }

      return false
    },
    jwt: async ({ token, user }) => {
      if (user) token.role = user.role

      return token
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.role = token.role
      }

      return session
    },
  },
}
