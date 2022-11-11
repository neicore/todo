import { ChangeEventHandler } from 'react'
import { Todo, todoMenu } from '../../data'
import CategoryTag from '../categoryTag'
import { Menu } from '../icons'
import Select from '../select'
import style from './index.module.sass'

interface Props {
  handleChange?: ChangeEventHandler<HTMLInputElement>
  todo: Todo
}

const TodoCard = ({ handleChange, todo }: Props) => {
  return (
    <div className={style.todo}>
      <input
        type="checkbox"
        name="todos"
        id="todo-id"
        onChange={handleChange}
      />

      <div className={style.todo_content}>
        <div className={style.todo_content_top}>
          <div className={style.todo_content_top_text}>
            <h6>{todo.title}</h6>
            <p>{todo.description}</p>
          </div>

          <Select
            options={todoMenu}
            type="single-normal"
            triggerType="icon"
            TriggerIcon={Menu}
          />
        </div>

        <div className={style.todo_content_bottom}>
          <CategoryTag title={todo.category} />
          {todo.dueDate ? (
            <span
              className={style.todo_content_bottom_due_date}
            >{`${todo.dueDate}`}</span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
export default TodoCard
