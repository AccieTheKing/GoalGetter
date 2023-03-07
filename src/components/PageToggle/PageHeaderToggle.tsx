import { Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

const PageHeaderToggle: React.FC = () => {
  const [toggleActive, setToggleActive] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/') setToggleActive(true)
    else setToggleActive(false)
  }, [window.location.pathname])

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
