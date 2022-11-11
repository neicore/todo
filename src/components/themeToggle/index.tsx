import { useState } from 'react'
import { Moon, Sun } from '../icons'
import style from './index.module.sass'

const ThemeToggle = () => {
  const [darkmode, setDarkmode] = useState(false)

  const handleClick = () => {
    setDarkmode(!darkmode)
  }

  return (
    <div
      className={style.theme_toggle}
      style={{ justifyContent: darkmode ? 'flex-end' : 'flex-start' }}
      onClick={handleClick}
    >
      <div className={style.icon}>{darkmode ? <Moon /> : <Sun />}</div>
    </div>
  )
}
export default ThemeToggle
