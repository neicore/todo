import { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export const NewTodoContext = createContext(
  {} as { openNewTodoModal: boolean; setOpenNewTodoModal: Function }
)

const NewTodoProvider = ({ children }: Props) => {
  const [openNewTodoModal, setOpenNewTodoModal] = useState(false)

//   switch (localStorage.getItem('openNewTodoModal')) {
//     case 'true':
//       setOpenNewTodoModal(true)
//       break
//     case 'false':
//       setOpenNewTodoModal(false)
//       break
//     default:
//       setOpenNewTodoModal(false)
//       break
//   }

  return (
    <NewTodoContext.Provider value={{ openNewTodoModal, setOpenNewTodoModal }}>
      {children}
    </NewTodoContext.Provider>
  )
}

export default NewTodoProvider
