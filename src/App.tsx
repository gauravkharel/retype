import './App.css'
import Greet from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import Status from './components/Status'

function App() {

  return (
      <div className='App'>
        <Status status='loading' />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to DiCaprio</Heading>
        </Oscar>
        <Greet name='Gaurav' isLoggedIn={true} />
      </div>
  )
}

export default App
