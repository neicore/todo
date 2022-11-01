import { ChangeEvent } from 'react'
import Button from './components/button'
import CategoryTag from './components/categoryTag'
import { Edit, Sort } from './components/icons'
import SearchBar from './components/searchBar'
import Select from './components/select'
import SplitButton from './components/SplitButton/Index'
import TodoCard from './components/todoCard'
import {
  checkboxSelectOptions,
  normalSelectOptions,
  normalWithIconSelectOptions,
  radioSelectOptions,
  todos,
} from './data'

function App() {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked')
  }
  const handleSecondaryClick = () => {
    console.log('Secondary button clicked')
  }

  const handleInput = (e: any) => {
    console.log(e.target.value)
  }
  return (
    <>
      <SplitButton
        primaryLabel={'Primary action'}
        secondaryLabel={'Secondary action'}
        handlePrimaryClick={handlePrimaryClick}
        handleSecondaryClick={handleSecondaryClick}
      />
      <Button label={'Save'} handleButtonClick={handlePrimaryClick} />

      <Select
        options={normalSelectOptions}
        TriggerIconLeft={Sort}
        triggerTitle={'Sort'}
        activeBeacon={true}
      />
      <Select
        options={normalWithIconSelectOptions}
        type="multi-normal"
        triggerType="icon"
        TriggerIcon={Edit}
      />
      <Select options={checkboxSelectOptions} type="multi-checkbox" />
      <Select options={radioSelectOptions} type="single-radio" />
      <SearchBar handleInput={handleInput} />

      <CategoryTag title={1} />
      <TodoCard todo={todos[0]} />
    </>
  )
}

export default App
