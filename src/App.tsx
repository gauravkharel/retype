import './App.css'
import Text from './components/polymorphic/Text'
function App() {

  return (
      <div className='App'>
        <Text as='h1' size='lg'>Heading</Text>
        <Text size='md'>Sub-Heading</Text>
        <Text size='sm' color='secondary'>
          Label
        </Text>
        </div>
  )
}

export default App
