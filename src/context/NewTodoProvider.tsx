import { createContext, ReactNode, useEffect, useState } from 'react'
import { Todo } from '../data'

interface Props {
  children: ReactNode
}

type NewTodoContextType = {
  openNewTodoModal: boolean
  setOpenNewTodoModal: Function
  todos: Todo[]
  setTodos: Function
}

export const NewTodoContext = createContext({} as NewTodoContextType)

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

    if (localStorage.getItem('todos')) {
      
    }
  }, [])

  return (
    <NewTodoContext.Provider
      value={{ openNewTodoModal, setOpenNewTodoModal, todos, setTodos }}
    >
      {children}
    </NewTodoContext.Provider>
  )
}

export default NewTodoProvider
