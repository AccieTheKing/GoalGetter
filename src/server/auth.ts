import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'

/**
 * This function will try to grab the session from the request headers.
 * The advantage of using getServerSession instead of the regular getSession is
 * that it’s a server-side only function and doesn’t trigger unnecessary fetch calls
 *
 * @param ctx
 * @returns
 */
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  return session
}
