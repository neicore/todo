import { useState } from 'react'
import styles from './index.module.sass'
import { useDetectOutsideClick } from '../../shared/hooks'
import { useTodoState } from '../../shared/context/todo/TodoProvider'
import Select from '../select'
import { Calendar } from '../icons'
import { nanoid } from 'nanoid'
import { format } from 'date-fns'

const TodoForm = () => {
  const { state, dispatch } = useTodoState()
  const [inputs, setinputs] = useState({
    title: state.modal?.todo ? state.modal?.todo.title : '',
    description: state.modal?.todo ? state.modal?.todo.description : '',
    category: state.modal?.todo
      ? state.modal?.todo.category
      : state.select?.title ?? '',
    dueDate: state.modal?.todo ? state.modal?.todo.dueDate : state.pickDate,
  })

  const startDate = new Date()

  const clearState = () => {
    dispatch({
      type: 'PICK_DATE',
      payload: {
        pickDate: '',
      },
    })

    dispatch({
      type: 'SELECT',
      payload: {
        select: {
          id: '',
          title: '',
        },
      },
    })

    dispatch({
      type: 'HANDLE_MODAL',
      payload: {
        modal: { child: null, todo: undefined },
      },
    })
  }

  let ref = useDetectOutsideClick(() => {
    clearState()
  })

  const handleCancel = () => {
    clearState()
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (state.modal?.todo) {
      dispatch({
        type: 'EDIT_TODO',
        payload: {
          todos: [
            {
              ...state.modal.todo,
              title: inputs.title.trim()
                ? inputs.title.trim()
                : state.modal?.todo.title,
              description: inputs.description.trim()
                ? inputs.description.trim()
                : state.modal?.todo.description,
              category: {
                id: state.select?.id ?? '',
                title: state.select?.title ?? '',
              },
              dueDate: state.pickDate,
              isCompleted: false,
            },
          ],
        },
      })

      clearState()

      return
    }

    if (inputs.title.trim() !== '' && inputs.description.trim() !== '') {
      dispatch({
        type: 'CREATE_TODO',
        payload: {
          todos: [
            {
              id: nanoid(5),
              title: inputs.title.trim() ?? '',
              description: inputs.description.trim(),
              category: {
                id: state.select?.id ?? '',
                title: state.select?.title ?? '',
              },
              dateCreated: format(new Date(), 'PP'),
              dueDate: state.pickDate,
              isCompleted: false,
            },
          ],
        },
      })

      clearState()
    }
  }

  return (
    <div className={styles.todo_form} ref={ref}>
      <input
        type="text"
        name="new-todo"
        id="todo-title"
        placeholder="Todo title goes here"
        className={styles.todo_form_title}
        value={inputs.title}
        onChange={(e) => setinputs({ ...inputs, title: e.target.value })}
      />
      <textarea
        name="new-todo"
        id="todo-descripiton"
        placeholder="Todo description goes here...."
        className={styles.todo_form_description}
        value={inputs.description}
        onChange={(e) => setinputs({ ...inputs, description: e.target.value })}
      ></textarea>

      <div className={styles.todo_form_footer}>
        <div className={styles.todo_form_footer_left}>
          <Select
            options={[]}
            TriggerIconLeft={<Calendar />}
            triggerTitle={state.pickDate ? state.pickDate : 'Pick a date'}
            type={'date'}
            bottom
            left
            startDate={startDate}
          />

          <Select
            options={state.categories ? state.categories : []}
            triggerTitle={
              state.select?.title ? state.select?.title : 'Category'
            }
            dispatchToNormal={(id, title) => {
              dispatch({ type: 'SELECT', payload: { select: { id, title } } })
            }}
            bottom
          />
        </div>

        <div className={styles.todo_form_footer_right}>
          <button onClick={handleCancel} className={styles.todo_form_cancel}>
            close
          </button>
          <button onClick={handleSubmit} className={styles.todo_form_submit}>
            submit
          </button>
        </div>
      </div>
    </div>
  )
}
export default TodoForm
