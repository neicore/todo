import { MouseEventHandler } from 'react'
import style from './style.module.sass'

interface Props {
  label: string
  type?: ButtonType
  handleButtonClick: MouseEventHandler<HTMLSpanElement | HTMLButtonElement>
}

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
}

const Button = ({ label, type, handleButtonClick }: Props) => {
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
