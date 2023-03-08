import { Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PageHeaderToggle: React.FC = () => {
  const [toggleActive, setToggleActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') setToggleActive(true)
    else setToggleActive(false)
  }, [router])

  return (
    <Flex gap={25}>
      <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
        <Text
          fontSize={30}
          fontWeight={toggleActive ? 'bold' : 'normal'}
          color={toggleActive ? 'black' : 'silver'}
          cursor="pointer"
        >
          Active Goals
        </Text>
      </Link>
      <Link as={NextLink} href="/goals" _hover={{ textDecoration: 'none' }}>
        <Text
          fontSize={30}
          color={!toggleActive ? 'black' : 'silver'}
          fontWeight={!toggleActive ? 'bold' : 'normal'}
          cursor="pointer"
        >
          All Goals
        </Text>
      </Link>
    </Flex>
  )
}

export default PageHeaderToggle
