import { api } from '@/utils/api'
import { Goal, GoalStatus } from '@prisma/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function useGoals(): [Goal[], Dispatch<SetStateAction<Goal[]>>] {
  const [goalsList, setGoalsList] = useState<Goal[]>([])
  const { isLoading, data } = api.goalsRouter.getGoals.useQuery({
    page: 1,
    limit: 10,
    // status: GoalStatus.NEW,
  })

  useEffect(() => {
    if (data) setGoalsList(data)
  }, [isLoading])

  return [goalsList, setGoalsList]
}
