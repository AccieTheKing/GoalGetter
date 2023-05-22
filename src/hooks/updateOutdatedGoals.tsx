import { api } from '@/utils/api'
import { GoalStatus } from '@prisma/client'
import { useEffect } from 'react'

export default function updateOutdatedGoals() {
  const { data, status } = api.goalsRouter.getAll.useQuery()
  const { mutate } = api.goalsRouter.updateGoal.useMutation()

  const notCompletedGoals = data?.filter((el) => {
    if (
      new Date() > new Date(el.completeBefore) &&
      el.status === GoalStatus.NEW
    ) {
      return el
    }
  })

  useEffect(() => {
    if (notCompletedGoals && notCompletedGoals.length > 0) {
      notCompletedGoals.forEach((el) => {
        mutate({
          params: { goalId: el.id },
          body: { status: GoalStatus.NOT_COMPLETED },
        })
      })
    }
  }, [status])
}
