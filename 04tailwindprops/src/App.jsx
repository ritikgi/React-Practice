import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400'>tailwind test</h1>
     <Card username="user1" btnText="Visit Me"/>
     <Card username="user2" />
    </>
  )
}

export default App
