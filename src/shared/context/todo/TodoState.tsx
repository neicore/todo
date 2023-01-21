import { createContext, Dispatch, useContext, useReducer } from 'react'
import { TodoReducerActions, TodoStateProps, TodoStateType } from '../../types'
import { todoReducer } from './todoReducer'

const TodoContext = createContext(
  {} as { state: TodoStateType; dispatch: Dispatch<TodoReducerActions> }
)

const TodoState = ({ children }: TodoStateProps) => {
  const initialState: TodoStateType = {
    todos: [],
    categories: [],
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
