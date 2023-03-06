import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
  active: boolean
}

const PageHeaderToggle: React.FC<Props> = ({ active }) => {
  const [toggleActive, setToggleActive] = useState(active)

  return (
    <Flex gap={25}>
      <Text
        fontSize={30}
        fontWeight={toggleActive ? 'bold' : 'normal'}
        color={toggleActive ? 'black' : 'silver'}
        cursor="pointer"
        onClick={() => setToggleActive(true)}
      >
        Active Goals
      </Text>
      <Text
        fontSize={30}
        color={!toggleActive ? 'black' : 'silver'}
        fontWeight={!toggleActive ? 'bold' : 'normal'}
        cursor="pointer"
        onClick={() => setToggleActive(false)}
      >
        All Goals
      </Text>
    </Flex>
  )
}

export default PageHeaderToggle
