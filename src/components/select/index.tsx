import { format } from 'date-fns'
import { ElementType, useState } from 'react'
//@ts-ignore
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useTodoState } from '../../shared/context/todo/TodoState'
import { useDetectOutsideClick } from '../../shared/hooks'
import Active from '../active'
import { ChevronDown, ChevronUp } from '../icons'
import SelectItem from '../selectItem'
import style from './index.module.sass'

interface Props {
  options: option[]
  type?:
    | 'single-radio'
    | 'single-normal'
    | 'multi-checkbox'
    | 'multi-normal'
    | 'date'
  triggerType?: 'full' | 'icon'
  TriggerIconLeft?: ElementType
  triggerTitle?: string
  activeBeacon?: boolean
  TriggerIcon?: ElementType
  bottom?: boolean
  right?: boolean
  top?: boolean
  left?: boolean
  startDate?: Date
  endDate?: Date
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
  bottom,
  right,
  top,
  left,
  startDate,
  endDate,
}: Props) => {
  const [opened, setOpened] = useState(false)
  const { dispatch } = useTodoState()

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

  const handleTriggerClick = () => {
    setOpened(!opened)
  }

  const handleDateSelect = (d: any) => {
    dispatch({
      type: 'PICK_DATE',
      payload: {
        pickDate: format(d, 'PP'),
      },
    })

    setOpened(false)
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
    switch (type) {
      case 'single-radio':
        return options.map(({ title, value, id, name }) => (
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

      case 'single-normal':
        return options.map(({ title, value, id, name, IconLeft }) => (
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
        ))

      case 'multi-checkbox':
        return options.map(({ title, value, id, name }) => (
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

      case 'multi-normal':
        return options.map(
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

      case 'date':
        return (
          <DayPicker
            mode="single"
            fromDate={startDate}
            onSelect={(d: any) => {
              handleDateSelect(d)
            }}
          />
        )

      default:
        return options.map(({ title, value, id, name, IconLeft }) => (
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
        ))
    }
  }

  return (
    <div className={style.container} ref={ref}>
      {triggerComponent()}
      {opened ? (
        <div
          className={style.options}
          style={{
            bottom: bottom ? '60px' : undefined,
            right: right ? '0px' : undefined,
            top: top ? '0px' : undefined,
            left: left ? '0px' : undefined,
          }}
        >
          {optionsComponent()}
        </div>
      ) : null}
    </div>
  )
}
export default Select
