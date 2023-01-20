import { ModalProps } from '../../shared/types'
import styles from './index.module.sass'

const Modal = ({ child }: ModalProps) => {
  return <section className={styles.container}>{child}</section>
}
export default Modal
