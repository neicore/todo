import Greeting from './components/greeting'
import Header from './components/header'
import Toolbar from './components/toolbar'
import style from './app.module.sass'
import { NewTodo } from './components/modal'
import { useTodoState } from './shared/context/todo/TodoState'

function App() {
  const { state } = useTodoState()
  return (
    <>
      <Header />
      <Greeting />
      <Toolbar />

      <div className={style.todo_container}>
        {/* {todos.map((todo, index) => (
          <TodoCard todo={todo} key={index} />
        ))} */}
      </div>
      {state.modal ? <NewTodo /> : null}
    </>
  )
}

export default App
