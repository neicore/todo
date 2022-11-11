import { filterOptions, sortOptions } from '../../data'
import { Calendar, Filter, Sort } from '../icons'
import SearchBar from '../searchBar'
import Select from '../select'
import style from './index.module.sass'

const Toolbar = () => {
  const handleInput = (e: any) => {
    console.log(e.target.value)
  }
  return (
    <section className={style.toolbar}>
      <SearchBar handleInput={handleInput} />

      <div className={style.right}>
        <Select
          options={sortOptions}
          type="single-radio"
          TriggerIconLeft={Sort}
          triggerTitle={'Sort'}
        />
        <Select
          options={filterOptions}
          type="multi-checkbox"
          TriggerIconLeft={Filter}
          triggerTitle={'Filters'}
        />
        <Select
          options={[]}
          TriggerIconLeft={Calendar}
          triggerTitle={'Pick a date'}
        />
      </div>
    </section>
  )
}
export default Toolbar
