import { TodoReducerActions, TodoStateType } from '../../types'

export const todoReducer = (
  state: TodoStateType,
  action: TodoReducerActions
) => {
  const { type, payload } = action

  switch (type) {
    case 'CREATE':
      return state

    case 'EDIT':
      return state

    case 'DELETE':
      return state

    case 'SORT':
      return state

    case 'FILTER':
      return state

    default:
      return state
  }
}
