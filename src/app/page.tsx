'use client'
import GoalCard from '@/components/Cards/GoalCard'
import PageHeaderToggle from '@/components/PageToggle/PageHeaderToggle'
import useMockGoals from '@/hooks/useMockGoals'
import { Box, Button, Flex, Input, SimpleGrid, Spacer } from '@chakra-ui/react'

export default function Home() {
  const mockGoals = useMockGoals()

  return (
    <main>
      <Box p="15px">
        <Box m="10px">
          <Box p="10px" bg="gray.50">
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
              />
            </Flex>

            <SimpleGrid gap={5} columns={{ sm: 2, md: 4 }}>
              {mockGoals?.map((goal) => (
                <GoalCard key={goal.title} {...goal} />
              ))}
            </SimpleGrid>
          </Box>
      <Box p="15px" m="10px">
        <PageContentHeader />
        </Box>
      </Box>
    </main>
  )
}
