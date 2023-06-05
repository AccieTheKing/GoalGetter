import { CreateNoteInput } from '@/server/schema/note.schema'
import { createNote } from '@/server/api/services/note.services'

export const createNoteHandler = async ({
  input,
}: {
  input: CreateNoteInput
}) => {
  try {
      const createdNote = await createNote({
          title: input.title,
          description: input.description,
            
    })
  } catch (error) {}
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
