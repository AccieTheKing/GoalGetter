'use client'
import GoalCard from '@/components/Cards/GoalCard'
import PageContentHeader from '@/components/Headers/PageContentHeader'
import WriteGoalInput from '@/components/WriteGoalInput'
import useMockGoals from '@/hooks/useMockGoals'
import { Box, SimpleGrid } from '@chakra-ui/react'

export default function Home() {
  const [mockGoals, setMockGoals] = useMockGoals()

  return (
    <main>
      <Box p="15px" m="10px">
        <PageContentHeader />
        <Box p="10px" bg="gray.50">
          <WriteGoalInput />
          <SimpleGrid gap={5} columns={{ sm: 2, md: 4 }}>
            {mockGoals?.map((goal) => (
              <GoalCard key={goal.title} {...goal} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </main>
  )
}
