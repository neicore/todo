import { CountBadgeProps } from '../../shared/types'
import styles from './index.module.sass'

const CountBadge = ({ count }: CountBadgeProps) => {
  return <span className={styles.badge}>{count}</span>
}
export default CountBadge
