import { ButtonProps } from '../../shared/types'
import style from './index.module.sass'

const Button = ({ label, type, handleButtonClick }: ButtonProps) => {
  return type ? (
    <button type={type} onClick={handleButtonClick} className={style.button}>
      {label}
    </button>
  ) : (
    <button onClick={handleButtonClick} className={style.button}>
      {label}
    </button>
  )
}
export default Button
