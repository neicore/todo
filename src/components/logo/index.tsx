import { LogoProps } from '../../shared/types'
import { LogoIcon } from '../icons'
import style from './index.module.sass'

const Logo = ({ type = 'full' }: LogoProps) => {
  switch (type) {
    case 'icon':
      return <LogoIcon />

    case 'full':
      return (
        <div className={style.logo}>
          <LogoIcon />
          Todo
        </div>
      )

    default:
      return <LogoIcon />
  }
}
export default Logo
