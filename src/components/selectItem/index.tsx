import { ElementType, MouseEventHandler, useState } from 'react'
import style from './style.module.sass'

interface Props {
  type: 'normal' | 'checkbox' | 'radio'
  title: string
  value: string
  id: string
  name: string
  handleClick: MouseEventHandler<any>
  IconLeft?: ElementType
  IconRight?: ElementType
}

const SelectItem = ({
  type,
  title,
  value,
  id,
  name,
  handleClick,
  IconLeft,
  IconRight,
}: Props) => {
  const [checked, setChecked] = useState(false)

  if (type === 'normal') {
    let normalMenuItem
    if (IconLeft && IconRight) {
      normalMenuItem = (
        <li
          className={style.menu_item}
          id={id}
          value={value}
          onClick={(e: any) => {
            setChecked(!checked)
            handleClick(e)
          }}
        >
          <span className={style.menu_item_left}>
            {<IconLeft />} {title}
          </span>
          {checked ? <IconRight /> : null}
        </li>
      )
    } else if (IconLeft) {
      normalMenuItem = (
        <li
          className={style.menu_item}
          id={id}
          onClick={handleClick}
          value={value}
        >
          {<IconLeft />} {title}
        </li>
      )
    } else if (IconRight) {
      normalMenuItem = (
        <li
          className={style.menu_item}
          id={id}
          value={value}
          onClick={(e: any) => {
            setChecked(!checked)
            handleClick(e)
          }}
        >
          {title} {checked ? <IconRight /> : null}
        </li>
      )
    } else {
      normalMenuItem = (
        <li
          className={style.menu_item}
          id={id}
          onClick={handleClick}
          value={value}
        >
          {title}
        </li>
      )
    }
    return normalMenuItem
  } else {
    return (
      <label className={`${style.menu_item} menu_item_check`} htmlFor={id}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onClick={handleClick}
        />
        {title}
      </label>
    )
  }
}
export default SelectItem
