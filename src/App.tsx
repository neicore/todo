import Greeting from './components/greeting'
import Header from './components/header'
import TodoCard from './components/todoCard'
import Toolbar from './components/toolbar'
import { todos } from './data'
import style from './app.module.sass'

function App() {
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
    </>
  )
}

export default App
