import { TodoReducerActions, TodoStateType } from '../../types'

export const todoReducer = (
  state: TodoStateType,
  action: TodoReducerActions
): TodoStateType => {
  const { type, payload } = action

  switch (type) {
    case 'CREATE_TODO':
      return state

    case 'EDIT_TODO':
      return state

    case 'DELETE_TODO':
      return state

    case 'SORT_TODO':
      return state

    case 'FILTER_TODO':
      return state

    case 'HANDLE_MODAL':
      return { ...state, modal: { child: payload.modal?.child } }

    case 'CREATE_CATEGORY':
      if (state.categories && payload.categories) {
        return {
          ...state,
          categories: [...state.categories, payload.categories[0]],
        }
      }
      return state

    case 'SELECT':
      return {
        ...state,
        select: payload.select,
      }

    default:
      return state
  }
}
