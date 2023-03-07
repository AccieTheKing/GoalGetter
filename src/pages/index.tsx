import GoalCard from '@/components/Cards/GoalCard'
import PageContentHeader from '@/components/Headers/PageContentHeader'
import WriteGoalInput from '@/components/WriteGoalInput'
import useMockGoals from '@/hooks/useMockGoals'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

export default function Home() {
  const [mockGoals, setMockGoals] = useMockGoals()

  return (
    <main>
      <Box p="15px" m="10px">
        <PageContentHeader />
        <Box p="10px" bg="gray.50">
          <WriteGoalInput onCreate={setMockGoals} />
          {mockGoals && mockGoals.length > 0 ? (
            <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
              {mockGoals.map((goal) => (
                <GoalCard key={goal.title} {...goal} />
              ))}
            </SimpleGrid>
          ) : (
            <Flex h="70vh" alignItems="center" justifyContent="center">
              <Text fontSize="2rem" fontWeight="extrabold">
                No Goals Created Yet😅
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </main>
  )
}
