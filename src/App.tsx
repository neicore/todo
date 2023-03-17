import Greeting from './components/greeting'
import Header from './components/header'
import Toolbar from './components/toolbar'
import style from './app.module.sass'
import { useTodoState } from './shared/context/todo/TodoProvider'
import { Modal } from './components/modal'
import TodoCard from './components/todoCard'
import { useFilterState } from './shared/context/filter/FilterProvider'
import { useEffect, useState } from 'react'
import { Todo } from './shared/types'

function App() {
  const { state } = useTodoState()
  const { state: filterState } = useFilterState()
  const [todos, setTodos] = useState<Todo[]>(state.todos!)
  const [emptyMessage, setEmptyMessage] = useState('Empty! Create todos')

  useEffect(() => {
    let filteredTodos: Todo[] | undefined

    switch (filterState.filter.type) {
      case 'SEARCH':
        filteredTodos =
          state.todos &&
          state.todos.filter(
            (t) =>
              t.title.includes(filterState.filter.value) ||
              t.description.includes(filterState.filter.value)
          )

        filteredTodos?.length === 0 && setEmptyMessage('No Todos found :(')

        setTodos(filteredTodos ?? [])
        break
      default:
        setTodos(state.todos ?? [])
        break
    }
  }, [state, filterState])

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
        {todos?.length === 0 && (
          <h3 className={style.empty_todos}>{emptyMessage}</h3>
        )}
        {todos
          ?.filter((todo) => !todo.isCompleted)
          ?.map((todo, index) => (
            <TodoCard todo={todo} key={index} />
          ))}

        {todos
          ?.filter((todo) => todo.isCompleted)
          ?.map((todo, index) => (
            <TodoCard todo={todo} key={index} />
          ))}
      </div>
      {state.modal?.child && <Modal child={state.modal.child} />}
    </div>
  )
}

export default App
