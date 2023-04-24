import { ChakraProvider } from '@chakra-ui/react'
import { type AppType } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { api } from '@/utils/api'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

const MyApp: AppType<{ session: Session }> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <SessionProvider session={pageProps.session}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default api.withTRPC(MyApp)
