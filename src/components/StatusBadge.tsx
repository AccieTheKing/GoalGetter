import { Badge } from '@chakra-ui/react'

export enum GoalStatus {
  COMPLETED = 'completed',
  IN_REVIEW = 'in-review',
  NOT_COMPLETED = 'not-completed',
  DEFAULT = 'default',
}

const badgeStatusColor = {
  [GoalStatus.COMPLETED]: 'green',
  [GoalStatus.DEFAULT]: '',
  [GoalStatus.IN_REVIEW]: 'purple',
  [GoalStatus.NOT_COMPLETED]: 'red',
}

type Props = {
  status: GoalStatus
}

export default function StatusBadge({ status }: Props) {
  return (
    <Badge
      colorScheme={badgeStatusColor[status]}
      p="2"
      ml="2"
      rounded="full"
      fontSize=".6rem"
    >
      {status}
    </Badge>
  )
}
