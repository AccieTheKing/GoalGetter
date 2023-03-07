import { GoalStatus } from '@/components/StatusBadge'
import { Goal } from '@/types'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

export default function useMockGoals(): [
  Goal[],
  Dispatch<SetStateAction<Goal[]>>
] {
  const [goalsList, setGoalsList] = useState<Goal[]>([])
  const allStatusList = useMemo(() => Object.values(GoalStatus), [])

  useEffect(() => {
    const generatedList: Goal[] = allStatusList.map((status, i) => ({
      id: i.toString(),
      title: `Goal ${i + 1}`,
      description: `Description ${i + 1}`,
      status,
    }))

    setGoalsList(generatedList)
  }, [])

  return [goalsList, setGoalsList]
}
