import { ElementType, MouseEventHandler } from 'react'
import style from './style.module.sass'

interface Props {
  type: 'normal' | 'checkbox' | 'radio'
  title: string
  value: string
  id: string
  name: string
  handleClick: MouseEventHandler<any>
  Icon?: ElementType
}

const SelectItem = ({
  type,
  title,
  value,
  id,
  name,
  handleClick,
  Icon,
}: Props) => {
  if (type === 'normal') {
    return Icon ? (
      <li
        className={style.menu_item}
        id={id}
        onClick={handleClick}
        value={value}
      >
        <Icon />
        <span>{title}</span>
      </li>
    ) : (
      <li
        className={style.menu_item}
        id={id}
        onClick={handleClick}
        value={value}
      >
        {title}
      </li>
    )
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
