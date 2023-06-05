import GoalCard from '@/components/Cards/GoalCard'
import Layout from '@/components/Layout'
import useGoals from '@/hooks/useGoals'
import { SimpleGrid } from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

export default function GoalsPage() {
  const allGoals = useGoals()

  return (
    <Layout>
      <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3, xl: 4, '2xl': 4 }}>
        {allGoals.map((goal) => (
          <GoalCard key={goal.title} {...goal} />
        ))}
      </SimpleGrid>
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
export async function getServerSideProps(context: GetServerSidePropsContext) {
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
