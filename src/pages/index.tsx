import GoalCard from '@/components/Cards/GoalCard'
import PageContentHeader from '@/components/Headers/PageContentHeader'
import WriteGoalInput from '@/components/WriteGoalInput'
import useGoals from '@/hooks/useGoals'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

export default function Home() {
  const [allNewGoals, setNewGoal] = useGoals({ withStatus: 'NEW' })

  return (
    <main>
      <Box p="15px" m="10px">
        <PageContentHeader />
        <Box p="10px" bg="gray.50">
          <WriteGoalInput onCreate={setNewGoal} />
          {allNewGoals && allNewGoals.length > 0 ? (
            <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
              {allNewGoals.map((goal) => (
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
