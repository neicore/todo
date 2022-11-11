import { useState } from 'react'
import { useDetectOutsideClick } from '../../hooks'
import { ButtonType } from '../button'
import { ChevronDown, ChevronUp } from '../icons'
import style from './index.module.sass'

interface Props {
  primaryLabel: string
  secondaryLabel: string
  type?: ButtonType
  handlePrimaryClick: React.MouseEventHandler<HTMLButtonElement>
  handleSecondaryClick: React.MouseEventHandler<HTMLButtonElement>
}

const SplitButton = ({
  primaryLabel,
  secondaryLabel,
  type,
  handlePrimaryClick,
  handleSecondaryClick,
}: Props) => {
  const [showSecondary, setShowSecondary] = useState(false)

  const handleIconClick = () => {
    setShowSecondary(!showSecondary)
  }

  const handleClickOutside = () => {
    setShowSecondary(!showSecondary)
  }

  const ref = useDetectOutsideClick(handleClickOutside)

  return (
    <div className={style.container}>
      {type ? (
        <button type={type} className={style.button}>
          <span onClick={handlePrimaryClick} className={style.text}>
            {primaryLabel}
          </span>
          <span onClick={handleIconClick} className={style.icon}>
            {showSecondary ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>
      ) : (
        <button className={style.button}>
          <span onClick={handlePrimaryClick} className={style.text}>
            {primaryLabel}
          </span>
          <span onClick={handleIconClick} className={style.icon}>
            {showSecondary ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>
      )}

      {showSecondary ? (
        <div className={style.secondary_container} ref={ref}>
          {
            <button
              className={style.secondary}
              onClick={(e) => {
                setShowSecondary(!showSecondary)
                handleSecondaryClick(e)
              }}
            >
              {secondaryLabel}
            </button>
          }
        </div>
      ) : null}
    </div>
  )
}
export default SplitButton
