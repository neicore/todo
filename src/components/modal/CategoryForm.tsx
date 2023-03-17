import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useTodoState } from '../../shared/context/todo/TodoProvider'
import { useDetectOutsideClick } from '../../shared/hooks'
import styles from './index.module.sass'

const CategoryForm = () => {
  const { dispatch } = useTodoState()
  const [value, setValue] = useState('')

  let ref = useDetectOutsideClick(() => {
    dispatch({
      type: 'HANDLE_MODAL',
      payload: {
        modal: { child: null },
      },
    })
  })

  const handleSubmit = () => {
    if (value.trim() !== '' && value.length <= 50) {
      dispatch({
        type: 'CREATE_CATEGORY',
        payload: {
          categories: [
            {
              id: nanoid(3),
              name: value.trim(),
              title: value.trim(),
              value: value.trim(),
            },
          ],
        },
      })
      dispatch({
        type: 'HANDLE_MODAL',
        payload: {
          modal: { child: null },
        },
      })
    }
  }

  const handleCancel = () => {
    dispatch({
      type: 'HANDLE_MODAL',
      payload: {
        modal: { child: null },
      },
    })
  }

  return (
    <form ref={ref} className={styles.category_form}>
      <input
        type="text"
        placeholder="Category name"
        className={styles.category_form_input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p
        className={`${styles.category_form_char_count} ${
          value.length > 50 ? styles.category_form_char_count_max : null
        }`}
      >
        {value.length}/50 characters
      </p>

      <div className={styles.todo_form_footer_right}>
        <button
          onClick={handleCancel}
          className={styles.todo_form_cancel}
          type={'button'}
        >
          Close
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          type={'submit'}
          className={styles.todo_form_submit}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
export default CategoryForm
