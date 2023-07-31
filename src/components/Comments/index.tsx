import { api } from '@/utils/api'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { FC, useCallback, useState } from 'react'

interface Props {
  goalId: string
}

const CommentsBlock: FC<Props> = ({ goalId }) => {
  const { useContext, notesRouter: router } = api
  const { notesRouter } = useContext()
  const { data: session } = useSession()
  const { data, isLoading } = router.getNotes.useQuery({ goalId })
  const { mutate } = router.createNote.useMutation()
  const [comment, setComment] = useState<string>('')
  const hasContent = !isLoading && data && data.length > 0

  const messageBackground = {
    [session?.user.id as string]: {
      textBubbleColor: '#CECECE',
      align: 'flex-end',
    },
    default: {
      textBubbleColor: '#E2E8F0',
      align: 'unset',
    },
  }

  const getMessageBackground = useCallback((userId: string) => {
    return userId === session?.user.id
      ? messageBackground[userId]
      : messageBackground.default
  }, [])

  const postNewComment = () => {
    if (comment && comment.trim().length > 0) {
      mutate(
        {
          goalId,
          createdById: session?.user.id as string,
          description: comment,
        },
        {
          onSuccess() {
            setComment('')
            notesRouter.getNotes.invalidate()
          },
        }
      )
    }
  }

  if (isLoading) return <Text>Loading...</Text>

  return (
    <Box>
      <Heading>Comments </Heading>
      <Box my="1.2rem" maxH={350} overflowY="auto" p={5}>
        {hasContent ? (
          data.map((el, i) => (
            <Box key={i} mb={4} w="full">
              <Flex
                width="100%"
                justifyContent={getMessageBackground(el.userId)?.align}
              >
                <Image
                  src={session?.user?.image ?? '/vercel.svg'}
                  rounded="full"
                  width={10}
                  height={10}
                  mr="15px"
                />
                <Box>
                  <Box
                    bg={getMessageBackground(el.userId)?.textBubbleColor}
                    p={3}
                    rounded="md"
                  >
                    {el.description}
                  </Box>

                  <Text
                    textAlign="right"
                    fontSize="0.8rem"
                    fontWeight={500}
                    mr={1.5}
                  >
                    {new Date(el?.createdAt ?? '').toLocaleTimeString(
                      new Intl.Locale('nl-NL')
                    )}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))
        ) : (
          <Text>No notes created :(</Text>
        )}
      </Box>

      <Box mb={5}>
        <Textarea
          placeholder="Write a comment"
          size="md"
          padding={4}
          resize="none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Box>
      <Button onClick={postNewComment}>Add</Button>
    </Box>
  )
}

export default CommentsBlock
