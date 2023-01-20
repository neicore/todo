import { CategoryProps } from '../../shared/types'
import style from './index.module.sass'

const CategoryTag = ({ title }: CategoryProps) => {
  return <span className={style.category_tag}>{title}</span>
}
export default CategoryTag
