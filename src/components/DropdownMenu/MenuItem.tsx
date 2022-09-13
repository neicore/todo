import { ReactNode } from 'react'
import styles from './style.module.sass'

interface Props {
  label: string
  icon?: ReactNode
  textWidth?: string
  child?: ReactNode
}

const MenuItem = ({ label, icon, textWidth, child }: Props) => {
  return (
    <li className={styles.list_item}>
      <span className={styles.left_content}>
        {icon ? <span className={styles.icon}>{icon} </span> : null}
        <p style={{ width: textWidth }}>{label}</p>
      </span>
      {child}
    </li>
  )
}
export default MenuItem
