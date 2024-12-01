import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 6;
  const addValue = () => {
    // counter++;
    setCounter(counter+1)
    console.log("value added")
  }
  const removeValue =() =>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>test project</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}
     >Add Value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
