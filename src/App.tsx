import {useEffect, useState} from 'react'

export const App = () => {
  const [color, setColor] = useState('black')

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('blue')
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='app' style={{backgroundColor: color}}>
      <h1>COLOR: {color}</h1>
    </div>
  )
}
