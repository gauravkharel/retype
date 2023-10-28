import './App.css'
import { CustomButton } from './components/html/Button'
function App() {

  return (
      <div className='App'>
        <CustomButton variant='primary' onClick={() => console.log('click me once')}>Click Me! </CustomButton>
        </div>
  )
}

export default App
