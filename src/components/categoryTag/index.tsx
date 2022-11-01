import style from './style.module.sass'

interface Props {
  title: number | undefined
}

const CategoryTag = ({ title }: Props) => {
  return <span className={style.category_tag}>{title}</span>
}
export default CategoryTag
