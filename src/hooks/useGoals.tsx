import { api } from '@/utils/api'
import { Goal, GoalStatus } from '@prisma/client'

type Props = {
  withStatus?: GoalStatus
}

/**
 * This hook is used to get a specific amount of goals from the database
 *  and set them to the state.
 *
 * It is also possible to make a request that fetches goals with a specific status.
 *
 * @param props
 * @returns - An array of goals
 */
export default function useGoals(props?: Props): Goal[] {
  const { data } = api.goalsRouter.getGoals.useQuery({
    page: 1,
    limit: 10,
    status: props?.withStatus,
  })

  return data ?? []
}
