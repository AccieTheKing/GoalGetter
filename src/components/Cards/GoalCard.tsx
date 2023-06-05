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
import { Goal } from '@prisma/client'
import { useRouter } from 'next/router'
import StatusBadge from '../StatusBadge'

type Props = Goal

export default function GoalCard({
  id,
  title,
  description,
  status,
  completeBefore,
}: Props) {
  const router = useRouter()

  const onNavigateToGoalDetails = () => {
    router.push(`/goals/${encodeURIComponent(id)}`)
  }

  return (
    <>
      <Card>
        <Stack divider={<Divider color="silver" />}>
          <CardHeader>
            <Heading size="lg" m="0" textAlign="center" fontWeight="extrabold">
              {title} <StatusBadge status={status} />
            </Heading>
          </CardHeader>

          <CardBody overflowY="auto" maxH="500">
            <Text fontSize="0.9em">{description}</Text>
          </CardBody>

          <CardFooter display="column" textAlign="center">
            <ButtonGroup m="auto">
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                onClick={onNavigateToGoalDetails}
              >
                See details
              </Button>
            </ButtonGroup>
            <Stat mt="0.5rem">
              <StatHelpText fontWeight="thin">
                Deadline:
                <Text display="inline" fontWeight="bold" marginLeft="2px">
                  {new Date(completeBefore).toLocaleDateString(
                    new Intl.Locale('nl-NL')
                  )}
                </Text>
              </StatHelpText>
            </Stat>
          </CardFooter>
        </Stack>
      </Card>
    </>
  )
}
