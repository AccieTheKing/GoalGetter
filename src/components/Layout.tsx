import { Box, Flex, Text } from '@chakra-ui/react'
import { Session } from 'next-auth'
import Link from 'next/link'
import { ReactNode } from 'react'
import PageContentHeader from './Headers/PageContentHeader'

type Props = {
  children: ReactNode
  status?: 'loading' | 'authenticated' | 'unauthenticated'
  data: Session | null
}

/**
 * This component is used to wrap the content of a page.
 * It will check if an user is authenticated and if not, it will redirect to the login page.
 *
 * @param param0
 * @returns
 */
export default function Layout({ children, status, data }: Props) {
  if (status && status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <Box p="15px" m="10px">
      <PageContentHeader user={data?.user} />
      {data ? (
        children
      ) : (
        <Flex h="90vh" justifyContent="center" alignItems="center">
          <Box>
            <Text fontSize="2rem" fontWeight="extrabold">
              Please Login to Create Goals
            </Text>
            <Link href="/auth">Go to login page</Link>
          </Box>
        </Flex>
      )}
    </Box>
  )
}
