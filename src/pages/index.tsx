import GoalCard from '@/components/Cards/GoalCard'
import Layout from '@/components/Layout'
import WriteGoalInput from '@/components/WriteGoalInput'
import updateOutdatedGoals from '@/hooks/updateOutdatedGoals'
import useGoals from '@/hooks/useGoals'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

type Data = {
  session: Session
}

export default function Home() {
  const [allNewGoals, setNewGoal] = useGoals({ withStatus: 'NEW' })
  updateOutdatedGoals()

  return (
    <Layout>
      <Box p="10px" bg="gray.50">
        <WriteGoalInput onCreate={setNewGoal} />
        {allNewGoals && allNewGoals.length > 0 ? (
          <SimpleGrid
            gap={5}
            columns={{ base: 1, md: 2, lg: 3, xl: 4, '2xl': 4 }}
          >
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
    </Layout>
  )
}

/**
 * This function is used to check if the user is authenticated by getting the session on server
 * and check its existence, if there is no valid session it will redirect to the login page.
 *
 * @param context
 * @returns
 */
export const getServerSideProps: GetServerSideProps<Data> = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
