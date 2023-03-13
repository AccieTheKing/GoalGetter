import { ChakraProvider } from '@chakra-ui/react'
import { type AppType } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { api } from '@/utils/api'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default api.withTRPC(MyApp)
