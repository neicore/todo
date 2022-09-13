import Button, { ButtonType } from './components/button'
import CountBadge from './components/CountBadge/CountBadge'
import { ChevronDown, Edit } from './components/icons'
import OverlayMenu from './components/OverlayMenu'
import MenuItem from './components/OverlayMenu/MenuItem'

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked')
  }
  const handleIconClick = () => {
    console.log('Icon clicked')
  }
  const menuItemClick = () => {
    console.log('Menu item clicked')
  }
  return (
    <>
      <Button
        type={ButtonType.submit}
        label="Habari Dunia"
        icon={<ChevronDown />}
        handleButtonClick={handleButtonClick}
        handleIconClick={handleIconClick}
      />

      <OverlayMenu />
    </>
  )
}

export default App
