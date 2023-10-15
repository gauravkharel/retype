import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Olkla',
      last: 'Wayne'
    },
    {
      first: 'Truce',
      last: 'Bayne'
    },
    {
      first: 'cJ',
      last: 'Timlsina'
    },
  ]
  return (
    <>
      <div>
        <h3>
          <Greet name={'gaurav'} messageCount={19} isLoggedIn={true} />

          <Person name={personName} />
          <PersonList names={nameList} />
        </h3>
      </div>
    </>
  )
}

export default App
