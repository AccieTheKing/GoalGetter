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
  Text,
} from '@chakra-ui/react'

type Props = {
  title: string
  description: string
}

export default function GoalCard({ title, description }: Props) {
  return (
    <Card minW="xs" maxW="sm">
      <Stack divider={<Divider color="silver" />}>
        <CardHeader>
          <Heading size="md" m="0">
            {title}
          </Heading>
        </CardHeader>

        <CardBody overflowY="auto" maxH="500">
          <Text fontSize="0.9em">{description}</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup m="auto">
            <Button colorScheme="teal" variant="outline">
              See details
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  )
}
