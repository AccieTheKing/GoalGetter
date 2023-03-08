import z, { TypeOf } from 'zod'

export const createGoalSchema = z.object({
  title: z.string({
    required_error: 'Title of id is required',
  }),
  description: z.string({
    required_error: 'Description of id is required',
  }),
  completeBefore: z.date({
    required_error: 'The date that the goal should be completed by is required',
  }),
})

export const goalParams = z.object({
  goalId: z.string(),
})

export const updateGoalSchema = z.object({
  params: goalParams,
  body: createGoalSchema.partial(),
})

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
})

export type CreateGoalInput = TypeOf<typeof createGoalSchema>
export type UpdateGoalInput = TypeOf<typeof updateGoalSchema>
export type ParamsInput = TypeOf<typeof goalParams>
export type FilterQueryInput = TypeOf<typeof filterQuery>
