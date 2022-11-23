import Greeting from './components/greeting'
import Header from './components/header'
import TodoCard from './components/todoCard'
import Toolbar from './components/toolbar'
import { todos } from './data'
import style from './app.module.sass'
import { NewTodo } from './components/modal'
import { useContext } from 'react'
import { NewTodoContext } from './context/NewTodoProvider'

function App() {
  const { openNewTodoModal } = useContext(NewTodoContext)
  return (
    <>
      <Header />
      <Greeting />
      <Toolbar />

      <div className={style.todo_container}>
        {todos.map((todo, index) => (
          <TodoCard todo={todo} key={index} />
        ))}
      </div>
      {openNewTodoModal ? <NewTodo handleSubmit={() => {}} /> : null}
    </>
  )
}

export default App
