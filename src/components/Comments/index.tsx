import { api } from '@/utils/api'
import { Box, Button, Heading, Text, Textarea } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { FC, useState } from 'react'

interface Props {
  goalId: string
}

const CommentsBlock: FC<Props> = ({ goalId }) => {
  const { notesRouter } = api.useContext()
  const { data: session } = useSession()
  const { data, isLoading } = api.notesRouter.getNotes.useQuery({ goalId })
  const { mutate } = api.notesRouter.createNote.useMutation()
  const [comment, setComment] = useState<string>('')
  const hasContent = !isLoading && data && data.length > 0

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
      <Box my="1.2rem">
        {hasContent ? (
          data.map((el, i) => {
            return <Text key={i}>{el.description}</Text>
          })
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
