import {
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
import { useRouter } from 'next/router'
import { IoIosArrowBack } from 'react-icons/io'
import PageHeaderToggle from '../PageToggle/PageHeaderToggle'

type Props = {
  user: DefaultSession['user']
}

export default function PageContentHeader({ user }: Props) {
  const router = useRouter()
  const onLogout = () => signOut()

  return (
    <Menu>
      <Flex
        align="baseline"
        mb="15px"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          bg="transparent"
          w="fit-content"
          h="fit-content"
          borderRadius="full"
          p={2}
          mr={5}
          onClick={router.back}
        >
          <IoIosArrowBack color="#000" size={30} />
        </Button>
        <PageHeaderToggle />
        <Spacer />
        <Button bg="teal.400" textColor="white" rounded="3xl">
          Create a new goal
        </Button>
        <MenuButton>
          <Image
            src={user?.image ?? '/vercel.svg'}
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
