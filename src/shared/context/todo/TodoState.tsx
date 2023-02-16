import { nanoid } from 'nanoid'
import { createContext, Dispatch, useContext, useReducer } from 'react'
import { TodoReducerActions, TodoStateProps, TodoStateType } from '../../types'
import { todoReducer } from './todoReducer'

const TodoContext = createContext(
  {} as { state: TodoStateType; dispatch: Dispatch<TodoReducerActions> }
)

const TodoState = ({ children }: TodoStateProps) => {
  const todosState = localStorage.getItem('todos')

  const todosStateLocal: TodoStateType | null = todosState
    ? JSON.parse(todosState)
    : null

  const initialState: TodoStateType = {
    todos: todosStateLocal ? todosStateLocal.todos : [],
    categories: todosStateLocal
      ? todosStateLocal?.categories?.length === 0
        ? [
            {
              id: nanoid(5),
              title: 'No Category',
              name: 'No Category',
              value: 'No Category',
            },
          ]
        : todosStateLocal?.categories
      : [
          {
            id: nanoid(5),
            title: 'No Category',
            name: 'No Category',
            value: 'No Category',
          },
        ],

    modal: { child: null, todo: undefined },
    select: { id: '', title: '' },
    pickDate: '',
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState

export const useTodoState = () => useContext(TodoContext)
