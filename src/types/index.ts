import { GoalStatus } from '@/components/StatusBadge'

export type Goal = {
  id: string
  title: string
  description: string
  status: GoalStatus
  createdAt: string
  completeBefore: string
}
