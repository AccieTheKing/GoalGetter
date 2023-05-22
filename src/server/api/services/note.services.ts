import { prisma } from '@/server/db'
import { Note, Prisma } from '@prisma/client'

/**
 * Service functions
 *
 * - Services are used to interact with the database, trough controllers.
 * Instead of using the controllers directly to interact with the databse
 *
 * @param input
 * @returns
 */

export const createNote = async (input: Prisma.NoteCreateInput) => {
  return (await prisma.note.create({ data: input })) as Note
}

export const findNote = async (
  where: Partial<Prisma.NoteWhereInput>,
  select?: Prisma.NoteSelect
) => {
  return (await prisma.note.findFirst({ where, select })) as Note
}

export const findUniqueNote = async (
  where: Prisma.GoalWhereUniqueInput,
  select?: Prisma.GoalSelect
) => {
  return (await prisma.goal.findUnique({ where, select })) as Note
}

export const findAllNotes = async (
  page: number,
  limit: number,
  where?: Prisma.NoteWhereInput
) => {
  const skip = (page - 1) * limit
  const take = limit || 10
  return (await prisma.note.findMany({
    include: {
      user: { select: { id: true, image: true, role: true } },
    },
    skip,
    take,
    where,
  })) as Note[]
}

export const updateNote = async (
  where: Partial<Prisma.NoteWhereUniqueInput>,
  data: Prisma.NoteUpdateInput,
  select?: Prisma.NoteSelect
) => {
  return (await prisma.note.update({ where, data, select })) as Note
}

export const deleteNote = async (where: Prisma.NoteWhereUniqueInput) => {
  return await prisma.note.delete({ where })
}
