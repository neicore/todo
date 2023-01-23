import { useTodoState } from '../../shared/context/todo/TodoState'
import { todoMenu } from '../../shared/data'
import { TodoCardProps } from '../../shared/types'
import CategoryTag from '../categoryTag'
import { Menu } from '../icons'
import TodoForm from '../modal/TodoForm'
import Select from '../select'
import style from './index.module.sass'

const TodoCard = ({ todo }: TodoCardProps) => {
  const { dispatch } = useTodoState()

  return (
    <div
      className={style.todo}
      style={{
        opacity: todo.isCompleted ? '0.3' : '1',
      }}
    >
      <input
        type="checkbox"
        name="todos"
        id="todo-id"
        onChange={() => {
          dispatch({
            type: 'IS_COMPLETED_TODO',
            payload: {
              todos: [
                {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                },
              ],
            },
          })
        }}
      />

      <div className={style.todo_content}>
        <div className={style.todo_content_top}>
          <div className={style.todo_content_top_text}>
            <h6
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </h6>
            <p
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {todo.description}
            </p>
          </div>

          <Select
            options={todoMenu}
            type="single-normal"
            triggerType="icon"
            TriggerIcon={<Menu />}
            dispatchToNormal={(id, title) => {
              if (title === 'Edit') {
                dispatch({
                  type: 'PICK_DATE',
                  payload: {
                    pickDate: todo.dueDate,
                  },
                })

                dispatch({
                  type: 'SELECT',
                  payload: {
                    select: {
                      id: todo.category.id,
                      title: todo.category.title,
                    },
                  },
                })

                dispatch({
                  type: 'HANDLE_MODAL',
                  payload: { modal: { child: <TodoForm />, todo: todo } },
                })
              } else if (title === 'Delete') {
                dispatch({ type: 'DELETE_TODO', payload: { todos: [todo] } })
              }
            }}
          />
        </div>

        {(todo.category.title || todo.dueDate) ?? (
          <div className={style.todo_content_bottom}>
            {todo.category.title !== '' ?? (
              <CategoryTag title={todo.category.title} />
            )}
            {todo.dueDate ? (
              <span
                className={style.todo_content_bottom_due_date}
              >{`${todo.dueDate}`}</span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
export default TodoCard
