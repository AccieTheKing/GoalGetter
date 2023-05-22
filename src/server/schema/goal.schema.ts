import { GoalStatus } from '@prisma/client'
import z, { TypeOf } from 'zod'

const goalStatus = z.enum([
  GoalStatus.COMPLETED,
  GoalStatus.IN_REVIEW,
  GoalStatus.NEW,
  GoalStatus.NOT_COMPLETED,
])

/**
 * This is the base schema for creating a goal.
 * These are the required fields for creating a goal.
 */
export const createGoalSchema = z.object({
  createdById: z.string({
    required_error: 'The user id of the creator is required',
  }),
  title: z.string({
    required_error: 'Title of goal is required',
  }),
  description: z.string({
    required_error: 'Description of goal is required',
  }),
  status: goalStatus.optional(),
  completeBefore: z.date({
    required_error: 'The date that the goal should be completed by is required',
  }),
})

/**
 * When querying for a goal, the only required field is the goalId.
 */
export const goalParams = z.object({
  goalId: z.string(),
})

/**
 * When updating a goal, the params only need goal params and the body containing new values
 * for updating a goal.
 */
export const updateGoalSchema = z.object({
  params: goalParams,
  body: createGoalSchema.partial(),
})

/**
 * This is the filter query for getting goals.
 */
export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
  status: goalStatus.optional(),
})

/**
 * These are the types for the schemas above.
 * These are used in the controllers.
 *
 * */
export type CreateGoalInput = TypeOf<typeof createGoalSchema>
export type UpdateGoalInput = TypeOf<typeof updateGoalSchema>
export type ParamsInput = TypeOf<typeof goalParams>
export type FilterQueryInput = TypeOf<typeof filterQuery>
