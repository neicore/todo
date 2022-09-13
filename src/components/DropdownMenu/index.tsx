import style from './style.module.sass'

interface Props {
  children: React.ReactNode
}

const OverlayMenu = ({ children }: Props) => {
  return (
    <div>
      <button>Trigger</button>
      <ul className={style.list}>{children}</ul>
    </div>
  )
}
export default OverlayMenu
