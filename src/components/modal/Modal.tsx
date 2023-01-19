import { ReactNode } from 'react'
import styles from './index.module.sass'

interface Props {
  child: ReactNode
}

const Modal = ({ child }: Props) => {
  return <section className={styles.container}>{child}</section>
}
export default Modal
