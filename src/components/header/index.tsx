import Logo from '../logo'
import SplitButton from '../SplitButton/Index'
import ThemeToggle from '../themeToggle'
import style from './style.module.sass'

const Header = () => {
  const handlePrimary = () => {
    console.log('Hey Primary button')
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
