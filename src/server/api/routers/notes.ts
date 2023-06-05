import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { createNoteSchema } from '@/server/schema/note.schema'
import { createNoteHandler } from '../controllers/note.controller'

export const notesRouter = createTRPCRouter({
  createNote: publicProcedure
    .input(createNoteSchema)
    .mutation(({ input, ctx }) => createNoteHandler({ input })),
})
