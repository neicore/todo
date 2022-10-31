import { ElementType, MouseEventHandler, useState } from 'react'
import style from './style.module.sass'

interface Props {
  type: 'normal' | 'checkbox' | 'radio'
  title: string
  value: string
  id: string
  name: string
  handleClick: MouseEventHandler<any>
  icon: 'none' | 'left' | 'right' | 'both'
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
  icon,
  IconLeft,
  IconRight,
}: Props) => {
  const [checked, setChecked] = useState(false)

  if (type === 'normal') {
    switch (icon) {
      case 'none':
        return (
          <li
            className={style.menu_item}
            id={id}
            onClick={handleClick}
            value={value}
          >
            {title}
          </li>
        )

      case 'left':
        return (
          <li
            className={style.menu_item}
            id={id}
            onClick={handleClick}
            value={value}
          >
            {IconLeft ? <IconLeft /> : null} {title}
          </li>
        )

      case 'right':
        return (
          <li
            className={`${style.menu_item} ${style.menu_item_right_icon}`}
            id={id}
            value={value}
            onClick={(e: any) => {
              setChecked(!checked)
              if (checked === false) {
                handleClick(e)
              }
            }}
          >
            {title} {checked ? IconRight ? <IconRight /> : null : null}
          </li>
        )

      case 'both':
        return (
          <li
            className={`${style.menu_item} ${style.menu_item_right_icon}`}
            id={id}
            value={value}
            onClick={(e: any) => {
              setChecked(!checked)
              if (checked === false) {
                handleClick(e)
              }
            }}
          >
            <span className={style.menu_item_left}>
              {IconLeft ? <IconLeft /> : null} {title}
            </span>
            {checked ? IconRight ? <IconRight /> : null : null}
          </li>
        )

      default:
        return (
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
