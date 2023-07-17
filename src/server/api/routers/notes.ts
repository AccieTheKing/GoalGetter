import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import {
  createNoteSchema,
  filterQuery,
  noteParams,
} from '@/server/schema/note.schema'
import {
  createNoteHandler,
  getNoteHandler,
  getNotesHandler,
} from '../controllers/note.controller'

export const notesRouter = createTRPCRouter({
  createNote: publicProcedure
    .input(createNoteSchema)
    .mutation(({ input, ctx }) => createNoteHandler({ input })),
  getNotes: publicProcedure
    .input(filterQuery)
    .query(({ input }) => getNotesHandler({ input: { limit: 10, page: 1 } })),
  getNote: publicProcedure
    .input(noteParams)
    .query(({ input }) => getNoteHandler({ input })),
})
