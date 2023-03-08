import { Badge } from '@chakra-ui/react'

export enum GoalStatus {
  COMPLETED = 'COMPLETED',
  IN_REVIEW = 'IN_REVIEW',
  NOT_COMPLETED = 'NOT_COMPLETED',
  NEW = 'NEW',
}

const badgeStatusColor = {
  [GoalStatus.COMPLETED]: 'green',
  [GoalStatus.NEW]: '',
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
