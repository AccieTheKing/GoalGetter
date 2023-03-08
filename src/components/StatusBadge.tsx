import { Badge } from '@chakra-ui/react'
import { GoalStatus } from '@prisma/client'

const badgeStatusColor = {
  [GoalStatus.COMPLETED]: 'green',
  [GoalStatus.NEW]: 'facebook',
  [GoalStatus.IN_REVIEW]: 'purple',
  [GoalStatus.NOT_COMPLETED]: 'red',
}

type Props = {
  status: GoalStatus
}

export default function StatusBadge({ status }: Props) {
  return (
    <Badge
      variant="outline"
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
