import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: ({ account, profile }) => {
      if (account?.provider === 'google') {
        return !!(profile?.email && profile?.email?.endsWith('@oberon.nl'))
      }
      return false // Do different verification for other providers that don't have `email_verified`
    },
    redirect: async ({ baseUrl, url }) => {
      return baseUrl
    },
  },
}

export default NextAuth(authOptions)
