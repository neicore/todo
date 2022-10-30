import Button from './components/button'
import Select from './components/select'
import SplitButton from './components/SplitButton/Index'
import { checkboxSelectOptions, normalSelectOptions, radioSelectOptions } from './data'

function App() {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked')
  }
  const handleSecondaryClick = () => {
    console.log('Secondary button clicked')
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

      <Select options={normalSelectOptions} />
      <Select options={checkboxSelectOptions} type="multi-checkbox" />
      <Select options={radioSelectOptions} type="single-radio" />
    </>
  )
}

export default App
