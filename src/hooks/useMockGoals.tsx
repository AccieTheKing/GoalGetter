import { GoalStatus } from '@/components/StatusBadge'
import { useMemo } from 'react'

export default function useMockGoals() {
  const allStatusList = useMemo(() => Object.values(GoalStatus), [])

  return allStatusList.map((status, i) => ({
    title: `Goal ${i + 1}`,
    description: `Description ${i + 1}`,
    status: status,
  }))
}
