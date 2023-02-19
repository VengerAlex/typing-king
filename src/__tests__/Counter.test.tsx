import {fireEvent, render, screen} from '@testing-library/react'
import {Counter} from '@/components/Counter'
import {expect} from 'vitest'

describe('Counter', () => {
  it ('Should render 0 at first render and disabled decrement button', () => {
    render(<Counter />)
    const count = screen.getByText(/0/i)
    const decrementButton = screen.getByRole('button', {name: 'DECREMENT'})

    expect(count).toBeInTheDocument()
    expect(decrementButton).toBeDisabled()
  })

  it('Should increment and decrement counter ', () => {
    render(<Counter />)
    const incrementBtn = screen.getByRole('button', {name: 'INCREMENT'})

    fireEvent.click(incrementBtn)

    expect(screen.getByText(/1/)).toBeInTheDocument()
  })
})
