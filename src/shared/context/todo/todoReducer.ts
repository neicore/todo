import { Todo, TodoReducerActions, TodoStateType } from '../../types'

export const todoReducer = (
  state: TodoStateType,
  action: TodoReducerActions
): TodoStateType => {
  const { type, payload } = action
  let todoPayload: Todo
  let todosState: TodoStateType

  switch (type) {
    case 'CREATE_TODO':

      // @ts-ignore //TODO: This typescript can do better
      todosState = { ...state, todos: [...state?.todos, payload?.todos[0]] }
      
      localStorage.setItem('todos', JSON.stringify(todosState))
      return todosState

    case 'EDIT_TODO':
      // @ts-ignore //TODO: This typescript can do better
      todoPayload = payload.todos[0]

      todosState = {
        ...state,
        todos: state.todos?.map((t) => {
          if (t.id === todoPayload.id) {
            return todoPayload
          } else {
            return t
          }
        }),
      }

      localStorage.setItem('todos', JSON.stringify(todosState))

      return todosState

    case 'IS_COMPLETED_TODO':
      // @ts-ignore //TODO: This typescript can do better
      todoPayload = payload.todos[0]

      todosState = {
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
      localStorage.setItem('todos', JSON.stringify(todosState))

      return todosState

    case 'DELETE_TODO':
      todosState = {
        ...state,
        // @ts-ignore //TODO: This typescript can do better
        todos: [...state?.todos?.filter((t) => t.id !== payload.todos[0].id)],
      }
      localStorage.setItem('todos', JSON.stringify(todosState))
      return todosState

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
        todosState = {
          ...state,
          categories: [...state.categories, payload.categories[0]],
        }
        localStorage.setItem('todos', JSON.stringify(todosState))
        return todosState
      }

      return state

    case 'SELECT':
      todosState = {
        ...state,
        select: payload.select,
      }
      localStorage.setItem('todos', JSON.stringify(todosState))
      return todosState

    case 'PICK_DATE':
      todosState = {
        ...state,
        pickDate: payload.pickDate,
      }
      localStorage.setItem('todos', JSON.stringify(todosState))
      return todosState

    default:
      return state
  }
}
