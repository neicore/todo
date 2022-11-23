import { ElementType } from 'react'
import styles from './index.module.sass'

interface Props {
  Child: ElementType
}

const Modal = ({ Child }: Props) => {
  return <section className={styles.container}>{<Child />}</section>
}
export default Modal
