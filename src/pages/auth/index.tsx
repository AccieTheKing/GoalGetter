import { Box, Button, Text } from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]'

export default function Login() {
  return (
    <Box display="flex" h="100vh" justifyContent="center">
      <Button onClick={() => signIn()}>
        <Text>Hoiii</Text>
      </Button>
    </Box>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session && session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
