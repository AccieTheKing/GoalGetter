import {
  CreateNoteInput,
  FilterQueryInput,
  ParamsInput,
} from '@/server/schema/note.schema'
import {
  createNote,
  findAllNotes,
  findUniqueNote,
} from '@/server/api/services/note.services'

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

export const getNoteHandler = async ({ input }: { input: ParamsInput }) => {
  try {
    const note = await findUniqueNote({ id: input.noteId })
    return note
  } catch (error) {
    throw error
  }
}

export const getNotesHandler = async ({
  input,
}: {
  input: FilterQueryInput
}) => {
  try {
    const notes = await findAllNotes(input?.page, input?.limit, {
      goalId: input.goalId,
    })
    return notes
  } catch (error) {
    throw error
  }
}

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
