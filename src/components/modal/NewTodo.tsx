import { useRef } from 'react'
import Modal from './Modal'
import styles from './index.module.sass'
import { useDetectOutsideClick } from '../../shared/hooks'
import { useTodoState } from '../../shared/context/todo/TodoState'

const NewTodo = () => {
  const { dispatch } = useTodoState()

  let ref = useDetectOutsideClick(() => {
    dispatch({
      type: 'HANDLE_MODAL',
      payload: {
        modal: false,
      },
    })
  })

  const handleCancel = () => {
    dispatch({
      type: 'HANDLE_MODAL',
      payload: {
        modal: false,
      },
    })
  }

  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (
      titleRef.current?.value.trim() !== '' &&
      descriptionRef.current?.value.trim() !== ''
    ) {
      // setTodos([
      //   ...todos,
      //   {
      //     id: nanoid(5),
      //     title: titleRef.current?.value.trim(),
      //     description: descriptionRef.current?.value.trim(),
      //     category: 1,
      //     dueDate: Date.now(),
      //     isCompleted: false,
      //   } as unknown as Todo,
      // ])

      dispatch({
        type: 'HANDLE_MODAL',
        payload: {
          modal: false,
        },
      })
    }
  }

  const newTodo = () => {
    return (
      <div className={styles.newTodo} ref={ref}>
        <input
          type="text"
          name="new-todo"
          id="todo-title"
          placeholder="Todo title goes here"
          className={styles.newTodo_title}
          ref={titleRef}
        />
        <textarea
          name="new-todo"
          id="todo-descripiton"
          placeholder="Todo description goes here...."
          className={styles.newTodo_description}
          ref={descriptionRef}
        ></textarea>

        <div className={styles.newTodo_footer}>
          <div className={styles.newTodo_footer_left}>
            <span>due date</span>
            <span>category</span>
          </div>

          <div className={styles.newTodo_footer_right}>
            <button onClick={handleCancel} className={styles.newTodo_cancel}>
              close
            </button>
            <button onClick={handleSubmit} className={styles.newTodo_submit}>
              submit
            </button>
          </div>
        </div>
      </div>
    )
  }
  return <Modal Child={newTodo} />
}
export default NewTodo
