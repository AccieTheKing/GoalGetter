import { Goal } from '@/types'
import { Collapse, Flex, Input, Textarea } from '@chakra-ui/react'
import { createRef, Dispatch, SetStateAction, useRef, useState } from 'react'
import { GoalStatus } from './StatusBadge'

type Props = {
  onCreate: Dispatch<SetStateAction<Goal[]>>
}

export default function WriteGoalInput({ onCreate }: Props) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [showError, setShowError] = useState<string>('')
  const descRef = useRef<HTMLTextAreaElement | null>(null)

  const isTitleFilledIn = title.trim().length > 0
  const isValidGoal = isTitleFilledIn && description.trim().length > 0

  const onCreateOnEnterKey = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === 'Enter' && isValidGoal) {
      onCreate((prev) => [
        ...prev,
        {
          title,
          description,
          id: Date.now().toString(),
          status: GoalStatus.NOT_COMPLETED,
        },
      ])
      setTitle('')
      setDescription('')
    } else {
      descRef.current?.focus()
    }
  }

  const onHandleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    console.log(e.target.value)
  }

  const onHandleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
    console.log(e.target.value)
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
      <Input
        value={title}
        {...inputStyles}
        onChange={onHandleTitleChange}
        onKeyDown={onCreateOnEnterKey}
        placeholder="Write Your Goal"
      />
      <Collapse in={isTitleFilledIn} animateOpacity>
        <Textarea
          ref={descRef}
          value={description}
          {...inputStyles}
          minH="170px"
          onChange={onHandleDescChange}
          onKeyDown={onCreateOnEnterKey}
          placeholder="Write a description for your goal."
        />
      </Collapse>
    </Flex>
  )
}
