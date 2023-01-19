import { TodoReducerActions, TodoStateType } from '../../types'

export const todoReducer = (
  state: TodoStateType,
  action: TodoReducerActions
) => {
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

    default:
      return state
  }
}
