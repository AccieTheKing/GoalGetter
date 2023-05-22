import { Box } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import PageContentHeader from './Headers/PageContentHeader'

type Props = {
  children: ReactNode
}

/**
 * This component is used to wrap the content of a page.
 * It will check if an user is authenticated and if not, it will redirect to the login page.
 *
 * @param param0
 * @returns
 */
export default function Layout({ children }: Props) {
  const { status, data } = useSession()
  if (status && status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <Box p="15px" m="10px">
      <PageContentHeader user={data?.user} />
      {children}
    </Box>
  )
}
