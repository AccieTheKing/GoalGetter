import { api } from '@/utils/api'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default api.withTRPC(MyApp)
