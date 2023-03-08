import {
  CreateGoalInput,
  FilterQueryInput,
  ParamsInput,
  UpdateGoalInput,
} from '@/server/schema/goal.schema'
import { Context } from '@/server/api/createContext'
import {
  createGoal,
  deleteGoal,
  findAllPosts,
  findUniqueGoal,
  updateGoal,
} from '@/server/api/services/goal.services'

export const createGoalHandler = async ({
  input,
  ctx,
}: {
  input: CreateGoalInput
  ctx?: Context
}) => {
  try {
    const USER_ID = '6408634265f1fb962dd039d1' // is going to be replaced with the user id from the context
    const createdGoal = await createGoal({
      title: input.title,
      description: input.description,
      completeBefore: input.completeBefore,
      user: { connect: { id: USER_ID } },
    })
    return createdGoal
  } catch (error) {
    throw error
  }
}

export const getGoalHandler = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput
}) => {
  try {
    const goal = await findUniqueGoal({ id: paramsInput.goalId })
    return goal
  } catch (error) {
    throw error
  }
}

export const getGoalsHandler = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput
}) => {
  try {
    const goals = await findAllPosts(filterQuery.page, filterQuery.limit)
    return goals
  } catch (error) {
    throw error
  }
}

export const updateGoalHandler = async ({
  paramsInput,
  input,
}: {
  paramsInput: ParamsInput
  input: UpdateGoalInput
}) => {
  try {
    const goal = await updateGoal({ id: paramsInput.goalId }, input.body)
    return goal
  } catch (error) {
    throw error
  }
}

export const deleteGoalHandler = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput
}) => {
  try {
    await deleteGoal({ id: paramsInput.goalId })
  } catch (error) {
    throw error
  }
}
