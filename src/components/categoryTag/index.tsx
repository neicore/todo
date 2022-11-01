import style from './style.module.sass'

interface Props {
  title: string
}

const CategoryTag = ({ title }: Props) => {
  return <span className={style.category_tag}>{title}</span>
}
export default CategoryTag
