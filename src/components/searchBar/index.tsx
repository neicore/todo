import { useFilterState } from '../../shared/context/filter/FilterProvider'
import { SearchBarProps } from '../../shared/types'
import { Search } from '../icons'
import style from './index.module.sass'

const SearchBar = ({ handleInput }: SearchBarProps) => {
  const { dispatch } = useFilterState()

  return (
    <div className={style.search_bar}>
      <Search />
      <input
        className={style.search_bar_input}
        type="search"
        name="main-search"
        id="main-search"
        placeholder="Search your todos"
        onInput={(e) => {
          dispatch({
            type: 'SEARCH_TODO',
            payload: {
              filter: { type: 'SEARCH', value: e.currentTarget.value },
            },
          })
        }}
      />
    </div>
  )
}
export default SearchBar
