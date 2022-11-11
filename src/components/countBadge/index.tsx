import styles from './index.module.sass'

interface Props {
  count: string
}

const CountBadge = ({ count }: Props) => {
  return <span className={styles.badge}>{count}</span>
}
export default CountBadge
