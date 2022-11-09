import { LogoIcon } from '../icons'
import style from './style.module.sass'

interface Props {
  type?: 'icon' | 'full'
}

const Logo = ({ type = 'full' }: Props) => {
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
