import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react'
import { DefaultSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import PageHeaderToggle from '../PageToggle/PageHeaderToggle'

type Props = {
  user: DefaultSession['user']
}

export default function PageContentHeader({ user }: Props) {
  const onLogout = () => signOut()

  if (!user) {
    return <Box></Box>
  }

  return (
    <Menu>
      <Flex
        align="baseline"
        mb="15px"
        justifyContent="center"
        alignItems="center"
      >
        <PageHeaderToggle />
        <Spacer />
        <Button bg="teal.400" textColor="white" rounded="3xl">
          Create a new goal
        </Button>
        <MenuButton>
          <Image
            src={user.image ?? '/images/placeholder.png'}
            rounded="full"
            width={50}
            height={50}
            ml="10px"
          />
        </MenuButton>
        <MenuList p={0}>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </MenuList>
      </Flex>
    </Menu>
  )
}
