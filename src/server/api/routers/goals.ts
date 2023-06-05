import {
  createGoalHandler,
  deleteGoalHandler,
  getGoalHandler,
  getGoalsHandler,
  updateGoalHandler,
} from '@/server/api/controllers/goal.controller'
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '@/server/api/trpc'
import {
  createGoalSchema,
  filterQuery,
  goalParams,
  updateGoalSchema,
} from '@/server/schema/goal.schema'

export const goalsRouter = createTRPCRouter({
  createGoal: protectedProcedure
    .input(createGoalSchema)
    .mutation(({ input, ctx }) => createGoalHandler({ input })),
  updateGoal: protectedProcedure
    .input(updateGoalSchema)
    .mutation(({ input }) =>
      updateGoalHandler({ input, paramsInput: input.params })
    ),
  deleteGoal: protectedProcedure
    .input(goalParams)
    .mutation(({ input }) => deleteGoalHandler({ paramsInput: input })),
  getGoal: protectedProcedure
    .input(goalParams)
    .query(({ input }) => getGoalHandler({ paramsInput: input })),
  getGoals: protectedProcedure
    .input(filterQuery)
    .query(({ input }) => getGoalsHandler({ filterQuery: input })),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.goal.findMany()
  }),
})
