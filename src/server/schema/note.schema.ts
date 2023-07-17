import z, { TypeOf } from 'zod'

/**
 * This is the base schema for creating a note.
 * These are the required fields for creating a note.
 */
export const createNoteSchema = z.object({
  goalId: z.string({
    required_error: 'The goal id of the note is required',
  }),
  createdById: z.string({
    required_error: 'The user id of the creator is required',
  }),
  description: z.string({
    required_error: 'Description of note is required',
  }),
})

/**
 * These are the params used for querying a note.
 */
export const noteParams = z.object({
  noteId: z.string(),
})

/**
 * When updating a note, the params only need note params and the body containing new values
 * for updating a note.
 */
export const updateNoteSchema = z.object({
  params: noteParams,
  body: createNoteSchema.partial(),
})

/**
 * This is the filter query for getting note.
 */
export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
  goalId: z.string().optional(),
})

/**
 * These are the types for the schemas above.
 * These are used in the controllers.
 *
 * */
export type CreateNoteInput = TypeOf<typeof createNoteSchema>
export type UpdateNoteInput = TypeOf<typeof updateNoteSchema>
export type ParamsInput = TypeOf<typeof noteParams>
export type FilterQueryInput = TypeOf<typeof filterQuery>
