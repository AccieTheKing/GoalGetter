import PageHeaderToggle from '@/components/PageToggle/PageHeaderToggle'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function GoalsPage() {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <Box p="15px" m="10px">
      <PageHeaderToggle />
      <Box p="15px" m="10px">
        Goals
      </Box>
    </Box>
  )
}
