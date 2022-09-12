import Button, { ButtonType } from './components/button'
import { ChevronDown } from './components/icons'

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked')
  }
  const handleIconClick = () => {
    console.log('Icon clicked')
  }
  return (
    <Button
      // type={ButtonType.submit}
      label="Habari Dunia"
      // icon={<ChevronDown />}
      handleButtonClick={handleButtonClick}
      // handleIconClick={handleIconClick}
    />
  )
}

export default App
