import {
  render, screen, waitFor, waitForElementToBeRemoved
} from '@testing-library/react'
import {Todos} from '@/components/Todos'
import {expect} from 'vitest'

describe('Todos', () => {
  it('Should display loader, when component mounts', () => {
    render(<Todos />)

    expect(screen.queryByText('Loading...')).toBeInTheDocument()
  })

  it.only('Should hide Loader, after its loaded', async() => {
    render(<Todos />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('LOADED')).toBeInTheDocument()
    }, {timeout: 5000})
  })
})
