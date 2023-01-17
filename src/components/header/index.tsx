import { useTodoState } from '../../shared/context/todo/TodoState'
import Logo from '../logo'
import SplitButton from '../SplitButton/Index'
import ThemeToggle from '../themeToggle'
import style from './index.module.sass'

const Header = () => {
  const { dispatch } = useTodoState()

  const handlePrimary = () => {
    dispatch({ type: 'HANDLE_MODAL', payload: { modal: true } })
  }
  const handleSecondary = () => {
    console.log('Hey secondary button')
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
