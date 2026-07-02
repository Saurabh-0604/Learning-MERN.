import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter =10;

  const addValue = ()=>{
    // console.log("Value Incrimented", Math.random());
    // counter ++
    setCounter(counter+1)
    // console.log("Counter: ", counter);
    
  }

  const subtractValue =()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>hey everyone , we are here to understand hooks in react</h1>
      <h3>Counter: {counter}</h3>
      {/* <h3>Counter: {counter}</h3>
      <h3>Counter: {counter}</h3>
      <h3>Counter: {counter}</h3>
      <p>Counter: {counter}</p> */}

      <button onClick={addValue}>Increment by 1</button>
      <button onClick={subtractValue}>Decrement by 1</button>
    </>
  )
}

export default App
