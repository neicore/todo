import { Search } from '../icons'
import style from './index.module.sass'

interface Props {
  handleInput: any
}

const SearchBar = ({ handleInput }: Props) => {
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
