import { ReactNode } from 'react'
import styles from './button.module.sass'

interface Props {
  label: string
  icon?: ReactNode
  type?: ButtonType
  handleButtonClick: React.MouseEventHandler<
    HTMLSpanElement | HTMLButtonElement
  >
  handleIconClick?: React.MouseEventHandler<HTMLSpanElement>
}

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
}

const Button = ({
  label,
  icon,
  type,
  handleButtonClick,
  handleIconClick,
}: Props) => {
  if (icon) {
    return type ? (
      <button type={type} className={styles.button}>
        <span onClick={handleButtonClick} className={styles.text}>
          {label}
        </span>
        <span onClick={handleIconClick} className={styles.icon}>
          {icon}
        </span>
      </button>
    ) : (
      <button className={styles.button}>
        <span onClick={handleButtonClick} className={styles.text}>
          {label}
        </span>
        <span onClick={handleIconClick} className={styles.icon}>
          {icon}
        </span>
      </button>
    )
  }

  return type ? (
    <button type={type} onClick={handleButtonClick} className={styles.button_2}>
      {label}
    </button>
  ) : (
    <button onClick={handleButtonClick} className={styles.button_2}>
      {label}
    </button>
  )
}
export default Button
