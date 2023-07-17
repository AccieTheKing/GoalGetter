import CommentsBlock from '@/components/Comments'
import BrowserTitleHeading from '@/components/Headers/BrowserTitleHeading'
import Layout from '@/components/Layout'
import StatusBadge from '@/components/StatusBadge'
import { api } from '@/utils/api'
import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react'
import { GoalStatus } from '@prisma/client'
import { useRouter } from 'next/router'

export default function GoalDetailPage() {
  const { query } = useRouter()
  const goalId = query?.id as string
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

      <Grid templateColumns="1fr 1fr 1fr 1fr" columnGap={10} mt="1rem">
        <Box gridColumn={'2/4'} maxW="50vw">
          <Text fontSize="lg" fontWeight="extrabold">
            Description:
          </Text>
          <Box p={5} border="solid 1px #CECECE" rounded="md">
            <Text>{data?.description}</Text>
          </Box>
        </Box>
        <Box gridColumn={'4/-1'}>
          {goalId && <CommentsBlock goalId={goalId} />}
        </Box>
      </Grid>
    </Layout>
  )
}
