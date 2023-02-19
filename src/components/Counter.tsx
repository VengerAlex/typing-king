import {useState} from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button disabled={!counter} onClick={decrement}>DECREMENT</button>
    </div>
  )
}
