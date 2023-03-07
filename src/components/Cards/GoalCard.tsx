import { Goal } from '@/types'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Stack,
  Stat,
  StatHelpText,
  Text,
} from '@chakra-ui/react'
import StatusBadge from '../StatusBadge'

type Props = Goal

export default function GoalCard({
  id,
  title,
  description,
  status,
  completeBefore,
}: Props) {
  return (
    <Card minW="xs" maxW="sm">
      <Stack divider={<Divider color="silver" />}>
        <CardHeader>
          <Heading size="md" m="0">
            {title} <StatusBadge status={status} />
          </Heading>
        </CardHeader>

        <CardBody overflowY="auto" maxH="500">
          <Text fontSize="0.9em">{description}</Text>
        </CardBody>

        <CardFooter display="column" textAlign="center">
          <ButtonGroup m="auto">
            <Button colorScheme="teal" variant="outline">
              See details
            </Button>
          </ButtonGroup>
          <Stat mt="0.5rem">
            <StatHelpText>
              Deadline:
              <span style={{ fontWeight: 'bold', marginLeft: '2px' }}>
                {completeBefore}
              </span>
            </StatHelpText>
          </Stat>
        </CardFooter>
      </Stack>
    </Card>
  )
}
