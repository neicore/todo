import { ElementType } from 'react'
import SelectItem from '../selectItem'

interface Props {
  options: option[]
  type?: 'single-radio' | 'single-normal' | 'multi-checkbox' | 'multi-normal'
}

export type option = {
  title: string
  value: string
  id: string
  name: string
  IconLeft?: ElementType
  IconRight?: ElementType
}

const Select = ({ options, type = 'single-normal' }: Props) => {
  const handleNormalClick = (e: any) => {
    console.log(e.currentTarget.getAttribute('value'))
  }
  const handleInputClick = (e: any) => {
    if (e.target.checked) {
      console.log(e.target.value, e.target)
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
      <div>trigger</div>
      <div>{optionsComponent()}</div>
    </div>
  )
}
export default Select
