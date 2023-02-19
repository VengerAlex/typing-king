import {useEffect, useRef, useState} from 'react'
import {Counter} from '@/components/Counter'
import {Todos} from '@/components/Todos'
export const sumAllNumbers = (array: number[]) => {
  return array.reduce((accum, number) => accum + number, 0)
}

export const App = () => {
  return (
    <div className='app'>
      <Todos />
    </div>
  )
}
