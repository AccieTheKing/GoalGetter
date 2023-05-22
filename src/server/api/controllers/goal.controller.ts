import {
  createGoal,
  deleteGoal,
  findAllGoals,
  findUniqueGoal,
  updateGoal,
} from '@/server/api/services/goal.services'
import {
  CreateGoalInput,
  FilterQueryInput,
  ParamsInput,
  UpdateGoalInput,
} from '@/server/schema/goal.schema'
import { NextPageContext } from 'next'

export const createGoalHandler = async ({
  input,
}: {
  input: CreateGoalInput
  ctx?: NextPageContext
}) => {
  try {
    const createdGoal = await createGoal({
      title: input.title,
      description: input.description,
      completeBefore: input.completeBefore,
      user: { connect: { id: input.createdById } },
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
    const goals = await findAllGoals(filterQuery.page, filterQuery.limit, {
      status: filterQuery.status,
    })
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
