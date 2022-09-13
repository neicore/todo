import CountBadge from '../CountBadge/CountBadge'
import MenuItem from './MenuItem'
import styles from './OverlayMenu.module.sass'

const OverlayMenu = () => {
  return (
    <ul className={styles.list}>
      <MenuItem
        icon={<input type="checkbox" name="" id="" />}
        textWidth="150px"
        label="Category 1"
        child={<CountBadge count="99+" />}
        handleClick={() => {}}
      />
      <MenuItem
        icon={<input type="checkbox" name="" id="" />}
        textWidth="150px"
        label="Category One"
        child={<CountBadge count="99+" />}
        handleClick={() => {}}
      />
    </ul>
  )
}
export default OverlayMenu
