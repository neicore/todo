import { MouseEventHandler, useContext } from 'react'
import Modal from './Modal'
import styles from './index.module.sass'
import { NewTodoContext } from '../../context/NewTodoProvider'
import { useDetectOutsideClick } from '../../hooks'

interface Props {
  handleSubmit: MouseEventHandler<HTMLButtonElement>
}

const NewTodo = ({ handleSubmit }: Props) => {
  const { setOpenNewTodoModal } = useContext(NewTodoContext)

  let ref = useDetectOutsideClick(() => {
    setOpenNewTodoModal(false)
  })

  const handleCancel = () => {
    setOpenNewTodoModal(false)
  }

  const newTodo = () => {
    return (
      <form className={styles.newTodo} ref={ref}>
        <input
          type="text"
          name="new-todo"
          id="todo-title"
          placeholder="Todo title goes here"
          className={styles.newTodo_title}
        />
        <textarea
          name="new-todo"
          id="todo-descripiton"
          placeholder="Todo description goes here...."
          className={styles.newTodo_description}
        ></textarea>

        <div className={styles.newTodo_footer}>
          <div className={styles.newTodo_footer_left}>
            <span>due date</span>
            <span>category</span>
          </div>

          <div className={styles.newTodo_footer_right}>
            <button onClick={handleCancel} className={styles.newTodo_cancel}>
              cancel
            </button>
            <button onClick={handleSubmit} className={styles.newTodo_submit}>
              submit
            </button>
          </div>
        </div>
      </form>
    )
  }
  return <Modal Child={newTodo} />
}
export default NewTodo
