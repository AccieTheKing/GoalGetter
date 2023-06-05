import { CreateNoteInput } from '@/server/schema/note.schema'
import { createNote } from '@/server/api/services/note.services'

export const createNoteHandler = async ({
  input,
}: {
  input: CreateNoteInput
}) => {
  try {
    const createdNote = await createNote({
      goal: { connect: { id: input.goalId } },
      user: { connect: { id: input.createdById } },
      description: input.description,
    })
    return createdNote
  } catch (error) {
    throw error
  }
}

export const getNoteHandler = async ({
  input,
}: {
  input: CreateNoteInput
}) => {}

export const updateNoteHandler = async ({
  input,
}: {
  input: CreateNoteInput
}) => {}

export const deleteNoteHandler = async ({
  input,
}: {
  input: CreateNoteInput
}) => {}
