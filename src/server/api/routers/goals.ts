import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import {
  createGoalSchema,
  filterQuery,
  goalParams,
  updateGoalSchema,
} from '@/server/schema/goal.schema'
import {
  createGoalHandler,
  deleteGoalHandler,
  getGoalHandler,
  getGoalsHandler,
  updateGoalHandler,
} from '../controllers/goal.controller'

export const goalsRouter = createTRPCRouter({
  createGoal: publicProcedure
    .input(createGoalSchema)
    .mutation(({ input, ctx }) => createGoalHandler({ input })),
  updateGoal: publicProcedure
    .input(updateGoalSchema)
    .mutation(({ input }) =>
      updateGoalHandler({ input, paramsInput: input.params })
    ),
  deleteGoal: publicProcedure
    .input(goalParams)
    .mutation(({ input }) => deleteGoalHandler({ paramsInput: input })),
  getPost: publicProcedure
    .input(goalParams)
    .query(({ input }) => getGoalHandler({ paramsInput: input })),
  getPosts: publicProcedure
    .input(filterQuery)
    .query(({ input }) => getGoalsHandler({ filterQuery: input })),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.goal.findMany()
  }),
})
