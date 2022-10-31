import { ElementType } from 'react'
import Active from '../active'
import CountBadge from '../CountBadge/CountBadge'
import SelectItem from '../selectItem'

interface Props {
  options: option[]
  type?: 'single-radio' | 'single-normal' | 'multi-checkbox' | 'multi-normal'
  triggerType?: 'full' | 'icon'
  TriggerIconLeft?: ElementType
  triggerTitle?: string
  activeBeacon?: boolean
  TriggerIconRight?: ElementType
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
  TriggerIconRight,
  TriggerIcon,
}: Props) => {
  const handleNormalClick = (e: any) => {
    console.log(e.currentTarget.getAttribute('value'))
  }
  const handleInputClick = (e: any) => {
    if (e.target.checked) {
      console.log(e.target.value, e.target)
    }
  }

  const triggerComponent = () => {
    switch (triggerType) {
      case 'full':
        return (
          <button className={'style.trigger'}>
            <span className={'style.trigger_left'}>
              {TriggerIconLeft ? <TriggerIconLeft /> : null}
              {triggerTitle}
            </span>

            <span className={'style.trigger_right'}>
              {activeBeacon ? <Active /> : <CountBadge count={'20'} />}
              {TriggerIconRight ? <TriggerIconRight /> : null}
            </span>
          </button>
        )

      case 'icon':
        return (
          <button className={'style.trigger_icon'}>
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
              handleClick={handleNormalClick}
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
              handleClick={handleNormalClick}
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
              handleClick={handleNormalClick}
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
    <div>
      {triggerComponent()}
      <div>{optionsComponent()}</div>
    </div>
  )
}
export default Select
