import { Todo, TodoReducerActions, TodoStateType } from '../../types'

export const todoReducer = (
  state: TodoStateType,
  action: TodoReducerActions
): TodoStateType => {
  const { type, payload } = action
  let todoPayload: Todo

  switch (type) {
    case 'CREATE_TODO':
      // @ts-ignore //TODO: This typescript can do better
      return { ...state, todos: [...state?.todos, payload?.todos[0]] }

    case 'EDIT_TODO':
      // @ts-ignore //TODO: This typescript can do better
      todoPayload = payload.todos[0]

      return {
        ...state,
        todos: state.todos?.map((t) => {
          if (t.id === todoPayload.id) {
            return todoPayload
          } else {
            return t
          }
        }),
      }

    case 'IS_COMPLETED_TODO':
      // @ts-ignore //TODO: This typescript can do better
      todoPayload = payload.todos[0]

      return {
        ...state,
        todos: state.todos?.map((t) => {
          if (t.id === todoPayload.id) {
            return {
              ...t,
              isCompleted: todoPayload.isCompleted,
            }
          } else {
            return t
          }
        }),
      }

    case 'DELETE_TODO':
      return {
        ...state,
        // @ts-ignore //TODO: This typescript can do better
        todos: [...state?.todos?.filter((t) => t.id !== payload.todos[0].id)],
      }

    case 'SORT_TODO':
      return state

    case 'FILTER_TODO':
      return state

    case 'HANDLE_MODAL':
      return {
        ...state,
        modal: { child: payload.modal?.child, todo: payload.modal?.todo },
      }

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

    case 'PICK_DATE':
      return {
        ...state,
        pickDate: payload.pickDate,
      }

    default:
      return state
  }
}
