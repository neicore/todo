import { ReactNode } from 'react'
import styles from './OverlayMenu.module.sass'

interface Props {
  label: string
  icon?: ReactNode
  textWidth?: string
  child?: ReactNode
  handleClick: React.MouseEventHandler<HTMLLIElement>
}

const MenuItem = ({ label, icon, textWidth, handleClick, child }: Props) => {
  return (
    <li onClick={handleClick} className={styles.list_item}>
      <span className={styles.left_content}>
        {icon ? <span className={styles.icon}>{icon} </span> : null}
        <p style={{ width: textWidth }}>{label}</p>
      </span>
      {child}
    </li>
  )
}
export default MenuItem
