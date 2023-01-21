import Greeting from './components/greeting'
import Header from './components/header'
import Toolbar from './components/toolbar'
import style from './app.module.sass'
import { useTodoState } from './shared/context/todo/TodoState'
import { Modal } from './components/modal'
import TodoCard from './components/todoCard'

function App() {
  const { state } = useTodoState()
  return (
    <div
      style={{
        height: state.modal?.child ? '100vh' : undefined,
        overflow: state.modal?.child ? 'hidden' : undefined,
      }}
    >
      <Header />
      <Greeting />
      <Toolbar />

      <div className={style.todo_container}>
        {state.todos?.length === 0 ? (
          <h3 className={style.empty_todos}>Empty! No todos</h3>
        ) : (
          state.todos?.map((todo, index) => (
            <TodoCard todo={todo} key={index} />
          ))
        )}
      </div>
      {state.modal?.child ? <Modal child={state.modal.child} /> : null}
    </div>
  )
}

export default App
