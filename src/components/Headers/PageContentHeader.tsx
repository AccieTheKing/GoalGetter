import { Flex, Spacer, Button } from '@chakra-ui/react'
import PageHeaderToggle from '../PageToggle/PageHeaderToggle'

export default function PageContentHeader() {
  return (
    <Flex align="baseline" mb="15px">
      <PageHeaderToggle active={true} />
      <Spacer />
      <Button bg="teal.400" textColor="white" rounded="3xl">
        Create a new goal
      </Button>
    </Flex>
  )
}
