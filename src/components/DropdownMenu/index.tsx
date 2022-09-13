import { useState } from 'react'
import { useDetectOutsideClick } from '../../hooks'
import CountBadge from '../CountBadge/CountBadge'
import { ChevronDown, ChevronUp, Sort } from '../icons'
import MenuItem from './MenuItem'
import style from './style.module.sass'

interface Props {
  textWidth?: string
}

const DropdownMenu = ({ textWidth }: Props) => {
  const [open, setOpen] = useState(false)
  const handleClickOutside = () => {
    setOpen(!open)
  }
  const ref = useDetectOutsideClick(handleClickOutside)

  return (
    <div className={style.dropdown_menu}>
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className={style.trigger}
      >
        <span className={style.left_container}>
          <Sort />
          <p style={{ width: textWidth ?? '80px' }}>Trigger</p>
        </span>
        <span className={style.right_container}>
          <CountBadge count="99+" />
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      {open ? (
        <ul className={style.list} ref={ref}>
          <MenuItem label={'Hey'} />
          <MenuItem label={'Hey'} />
          <MenuItem label={'Hey'} />
        </ul>
      ) : null}
    </div>
  )
}
export default DropdownMenu
