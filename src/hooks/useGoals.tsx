import { api } from '@/utils/api'
import { Goal, GoalStatus } from '@prisma/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Props = {
  withStatus?: GoalStatus
}

export default function useGoals(
  props?: Props
): [Goal[], Dispatch<SetStateAction<Goal[]>>] {
  const [goalsList, setGoalsList] = useState<Goal[]>([])
  const { isLoading, data } = api.goalsRouter.getGoals.useQuery({
    page: 1,
    limit: 10,
    status: props?.withStatus,
  })

  useEffect(() => {
    if (data) setGoalsList(data)
  }, [isLoading])

  return [goalsList, setGoalsList]
}
