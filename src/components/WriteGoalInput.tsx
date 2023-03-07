import { Goal } from '@/types'
import {
  Button,
  Collapse,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { GoalStatus } from './StatusBadge'

type Props = {
  onCreate: Dispatch<SetStateAction<Goal[]>>
}

export default function WriteGoalInput({ onCreate }: Props) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const descRef = useRef<HTMLTextAreaElement | null>(null)

  const isTitleFilledIn = title.trim().length > 0
  const isDescFilledIn = description.trim().length > 0
  const isDateValid = date.trim().length > 0 && new Date(date) > new Date()
  const isValidGoal = isTitleFilledIn && isDescFilledIn && isDateValid

  const onCreateGoal = () => {
    if (isValidGoal) {
      onCreate((prev) => [
        ...prev,
        {
          title,
          description,
          id: Date.now().toString(),
          status: GoalStatus.NOT_COMPLETED,
          createdAt: new Date().toLocaleDateString(new Intl.Locale('nl-NL')),
          completeBefore: new Date(date).toLocaleDateString(
            new Intl.Locale('nl-NL')
          ),
        },
      ])
      setTitle('')
      setDescription('')
    }
  }

  const onCreateOnEnterKey = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (isTitleFilledIn && !isValidGoal && e.key === 'Enter') {
      descRef.current?.focus()
    }

    if (e.key === 'Enter' && isValidGoal) onCreateGoal()
  }

  const onHandleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onHandleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const inputStyles = {
    bg: 'white',
    w: '35vw',
    minW: '500px',
    p: '1.5rem',
    border: '1px solid #EDF2F7',
    _placeholder: { color: 'gray.400' },
    _focus: { borderColor: 'teal.400' },
  }

  return (
    <Flex
      mb="15px"
      borderRadius="md"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      gap={5}
    >
      <Collapse in={isTitleFilledIn}>
        <FormLabel fontWeight="extrabold" mb={0}>
          New Goal
        </FormLabel>
      </Collapse>
      <Input
        value={title}
        {...inputStyles}
        borderColor={isTitleFilledIn ? 'green' : ''}
        onChange={onHandleTitleChange}
        onKeyDown={onCreateOnEnterKey}
        placeholder="Write Your Goal"
      />
      <Collapse in={isTitleFilledIn} animateOpacity>
        <Flex direction="column" gap={5}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              ref={descRef}
              value={description}
              cols={30}
              rows={5}
              {...inputStyles}
              borderColor={isDescFilledIn ? 'green' : ''}
              onChange={onHandleDescChange}
              onKeyDown={onCreateOnEnterKey}
              placeholder="Write a description for your goal."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Complete before:</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              value={date}
              {...inputStyles}
              borderColor={
                isDateValid
                  ? 'green'
                  : date.length > 0 && !isDateValid
                  ? 'red'
                  : ''
              }
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            {date.length > 0 && !isDateValid && (
              <FormHelperText>
                Please select a date in the future
              </FormHelperText>
            )}
          </FormControl>

          <Button size="lg" colorScheme="teal" onClick={onCreateGoal}>
            Create Goal
          </Button>
        </Flex>
      </Collapse>
    </Flex>
  )
}
