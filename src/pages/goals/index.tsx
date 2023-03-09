import GoalCard from '@/components/Cards/GoalCard'
import PageHeaderToggle from '@/components/PageToggle/PageHeaderToggle'
import useGoals from '@/hooks/useGoals'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function GoalsPage() {
  const [allGoals, setAllGoals] = useGoals()

  return (
    <Box p="15px" m="10px">
      <PageHeaderToggle />
      <Box p="15px" m="10px">
        Goals
      </Box>
      <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}>
        {allGoals.map((goal) => (
          <GoalCard key={goal.title} {...goal} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
