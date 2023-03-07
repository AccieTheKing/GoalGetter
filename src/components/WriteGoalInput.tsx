import { Flex, Input } from '@chakra-ui/react'
type Props = {
  onCreate: Dispatch<SetStateAction<Goal[]>>
}

export default function WriteGoalInput({ onCreate }: Props) {
  return (
    <Flex mb="15px" borderRadius="md" justifyContent="center">
      <Input
        placeholder="Write Your Goal"
        bg="white"
        size="lg"
        w="35vw"
        minW="500px"
        p="1.5rem"
        _placeholder={{ color: 'gray.400' }}
        _focus={{ borderColor: 'teal.400' }}
        onChange={(e) => console.log(e.target.value)}
        onKeyDown={(e) => console.log(e.key)}
      />
    </Flex>
  )
}
