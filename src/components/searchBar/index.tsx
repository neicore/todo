import { SearchBarProps } from '../../shared/types'
import { Search } from '../icons'
import style from './index.module.sass'

const SearchBar = ({ handleInput }: SearchBarProps) => {
  return (
    <div className={style.search_bar}>
      <Search />
      <input
        className={style.search_bar_input}
        type="search"
        name="main-search"
        id="main-search"
        placeholder="Search your todos"
        onInput={handleInput}
      />
    </div>
  )
}
export default SearchBar
