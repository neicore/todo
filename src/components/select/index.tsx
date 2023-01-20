import { ElementType, useState } from 'react'
import { useTodoState } from '../../shared/context/todo/TodoState'
import { useDetectOutsideClick } from '../../shared/hooks'
import Active from '../active'
import { ChevronDown, ChevronUp } from '../icons'
import SelectItem from '../selectItem'
import style from './index.module.sass'

interface Props {
  options: option[]
  type?: 'single-radio' | 'single-normal' | 'multi-checkbox' | 'multi-normal'
  triggerType?: 'full' | 'icon'
  TriggerIconLeft?: ElementType
  triggerTitle?: string
  activeBeacon?: boolean
  TriggerIcon?: ElementType
}

export type option = {
  title: string
  value: string
  id: string
  name: string
  IconLeft?: ElementType
  IconRight?: ElementType
}

const Select = ({
  options,
  type = 'single-normal',
  triggerType = 'full',
  TriggerIconLeft,
  triggerTitle,
  activeBeacon = false,
  TriggerIcon,
}: Props) => {
  const [opened, setOpened] = useState(false)
  const { state, dispatch } = useTodoState()

  let ref = useDetectOutsideClick(() => {
    setOpened(false)
  })

  const handleNormalClick = (id: string, title: string) => {
    dispatch({
      type: 'SELECT',
      payload: {
        select: {
          id,
          title,
        },
      },
    })
    setOpened(false)
  }

  const handleInputClick = (e: any) => {
    if (e.target.checked) {
      console.log(e.target.value, e.target)
    }
  }

  const handleTriggerClick = (e: any) => {
    setOpened(!opened)
  }

  const triggerComponent = () => {
    switch (triggerType) {
      case 'full':
        return (
          <button className={style.trigger} onClick={handleTriggerClick}>
            <span className={style.trigger_left}>
              {TriggerIconLeft ? <TriggerIconLeft /> : null}
              {triggerTitle}
            </span>

            <span className={style.trigger_right}>
              {activeBeacon ? <Active /> : null}
              {opened ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
        )

      case 'icon':
        return (
          <button className={style.trigger_icon} onClick={handleTriggerClick}>
            {TriggerIcon ? <TriggerIcon /> : null}
          </button>
        )

      default:
        break
    }
  }

  const optionsComponent = () => {
    let returnComponent
    switch (type) {
      case 'single-radio':
        returnComponent = options.map(({ title, value, id, name }) => (
          <SelectItem
            type={'radio'}
            title={title}
            value={value}
            id={id}
            name={name}
            handleClick={handleInputClick}
            icon="none"
            key={id}
          />
        ))
        break

      case 'single-normal':
        returnComponent = options.map(
          ({ title, value, id, name, IconLeft }) => (
            <SelectItem
              type={'normal'}
              title={title}
              value={value}
              id={id}
              name={name}
              handleClick={() => handleNormalClick(id, title)}
              key={id}
              icon="left"
              IconLeft={IconLeft}
            />
          )
        )
        break

      case 'multi-checkbox':
        returnComponent = options.map(({ title, value, id, name }) => (
          <SelectItem
            type={'checkbox'}
            title={title}
            value={value}
            id={id}
            name={name}
            handleClick={handleInputClick}
            icon="none"
            key={id}
          />
        ))
        break

      case 'multi-normal':
        returnComponent = options.map(
          ({ title, value, id, name, IconLeft, IconRight }) => (
            <SelectItem
              type={'normal'}
              title={title}
              value={value}
              id={id}
              name={name}
              handleClick={() => handleNormalClick(id, title)}
              key={id}
              icon="both"
              IconLeft={IconLeft}
              IconRight={IconRight}
            />
          )
        )
        break

      default:
        returnComponent = options.map(
          ({ title, value, id, name, IconLeft }) => (
            <SelectItem
              type={'normal'}
              title={title}
              value={value}
              id={id}
              name={name}
              handleClick={() => handleNormalClick(id, title)}
              key={id}
              icon="left"
              IconLeft={IconLeft}
            />
          )
        )
        break
    }

    return returnComponent
  }

  return (
    <div className={style.container} ref={ref}>
      {triggerComponent()}
      {opened ? (
        <div className={style.options}>{optionsComponent()}</div>
      ) : null}
    </div>
  )
}
export default Select
