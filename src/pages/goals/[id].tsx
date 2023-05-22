import BrowserTitleHeading from '@/components/Headers/BrowserTitleHeading'
import Layout from '@/components/Layout'
import StatusBadge from '@/components/StatusBadge'
import { api } from '@/utils/api'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { GoalStatus } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function GoalDetailPage() {
  const goalId = useRouter().query.id as string
  const { data } = api.goalsRouter.getGoal.useQuery({ goalId })

  return (
    <Layout>
      <BrowserTitleHeading title={data?.title ?? ''} />
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Text textAlign="center" fontSize="6xl" fontWeight="extrabold">
          {data?.title}
        </Text>
        <StatusBadge status={data?.status ?? GoalStatus.IN_REVIEW} />
      </Flex>
      <Text fontWeight="thin">
        Created:
        <Text display="inline" ml=".2rem" fontWeight="medium">
          {new Date(data?.createdAt ?? '').toLocaleString(
            new Intl.Locale('nl-NL')
          )}
        </Text>
      </Text>
      <Text fontWeight="thin">
        Deadline:
        <Text display="inline" ml=".2rem" fontWeight="medium">
          {new Date(data?.completeBefore ?? '').toLocaleDateString(
            new Intl.Locale('nl-NL')
          )}
        </Text>
      </Text>
      <Divider mt="1rem" />
      <Box
        p={5}
        border="solid 1px #CECECE"
        maxW="50vw"
        m="2rem auto auto"
        rounded="md"
      >
        <Text>{data?.description}</Text>
      </Box>

      <Box>
        <Heading>Notes</Heading>
        <Text>No notes created :(</Text>
      </Box>
    </Layout>
  )
}
