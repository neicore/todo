import Button from './components/button'
import DropdownMenu from './components/DropdownMenu'
import SplitButton from './components/SplitButton/Index'

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

      <DropdownMenu/>
    </>
  )
}

export default App
