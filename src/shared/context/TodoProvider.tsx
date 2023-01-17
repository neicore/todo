import { createContext, ReactNode, useEffect, useState } from 'react'
import { Todo } from '../data'

interface Props {
  children: ReactNode
}

type TodoContextType = {
  openNewTodoModal: boolean
  setOpenNewTodoModal: Function
  todos: Todo[]
  setTodos: Function
}

export const TodoContext = createContext({} as TodoContextType)

const NewTodoProvider = ({ children }: Props) => {
  const [openNewTodoModal, setOpenNewTodoModal] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    switch (localStorage.getItem('openNewTodoModal')) {
      case 'true':
        setOpenNewTodoModal(true)
        break
      case 'false':
        setOpenNewTodoModal(false)
        break
      default:
        setOpenNewTodoModal(false)
        break
    }
  }, [])

  useEffect(() => {
    const todosFromLocal = localStorage.getItem('todos')
    if (localStorage.getItem('todos')) {
    }
  }, [])

  return (
    <TodoContext.Provider
      value={{ openNewTodoModal, setOpenNewTodoModal, todos, setTodos }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default NewTodoProvider
