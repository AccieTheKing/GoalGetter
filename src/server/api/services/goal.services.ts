import { prisma } from '@/server/db'
import { Goal, Prisma } from '@prisma/client'

/**
 * Service functions
 *
 * - Services are used to interact with the database, trough controllers.
 * Instead of using the controllers directly to interact with the databse
 *
 * @param input
 * @returns
 */

export const createGoal = async (input: Prisma.GoalCreateInput) => {
  return (await prisma.goal.create({
    data: input,
  })) as Goal
}

export const findGoal = async (
  where: Partial<Prisma.GoalWhereInput>,
  select?: Prisma.GoalSelect
) => {
  return (await prisma.goal.findFirst({
    where,
    select,
  })) as Goal
}

export const findUniqueGoal = async (
  where: Prisma.GoalWhereUniqueInput,
  select?: Prisma.GoalSelect
) => {
  return (await prisma.goal.findUnique({
    where,
    select,
  })) as Goal
}

export const findAllGoals = async (
  page: number,
  limit: number,
  where?: Prisma.GoalWhereInput
) => {
  const take = limit || 10
  const skip = (page - 1) * limit
  return (await prisma.goal.findMany({
    include: {
      user: {
        select: { id: true, image: true, role: true, createdAt: true },
      },
    },
    skip,
    take,
    where,
  })) as Goal[]
}

export const updateGoal = async (
  where: Partial<Prisma.GoalWhereUniqueInput>,
  data: Prisma.GoalUpdateInput,
  select?: Prisma.GoalSelect
) => {
  return (await prisma.goal.update({ where, data, select })) as Goal
}

export const deleteGoal = async (where: Prisma.GoalWhereUniqueInput) => {
  return await prisma.goal.delete({ where })
}
