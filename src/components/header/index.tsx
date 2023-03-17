import { useTodoState } from '../../shared/context/todo/TodoProvider'
import Logo from '../logo'
import CategoryForm from '../modal/CategoryForm'
import TodoForm from '../modal/TodoForm'
import SplitButton from '../SplitButton/Index'
import ThemeToggle from '../themeToggle'
import style from './index.module.sass'

const Header = () => {
  const { dispatch } = useTodoState()

  const handlePrimary = () => {
    dispatch({
      type: 'HANDLE_MODAL',
      payload: { modal: { child: <TodoForm /> } },
    })
  }
  const handleSecondary = () => {
    dispatch({
      type: 'HANDLE_MODAL',
      payload: { modal: { child: <CategoryForm /> } },
    })
  }
  return (
    <header className={style.header}>
      <Logo />

      <div className={style.right}>
        <ThemeToggle />
        <SplitButton
          primaryLabel={'New Todo'}
          secondaryLabel={'New Category'}
          handlePrimaryClick={handlePrimary}
          handleSecondaryClick={handleSecondary}
        />
      </div>
    </header>
  )
}
export default Header
