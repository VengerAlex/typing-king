import {sumAllNumbers} from '@/App'
import {render} from '@testing-library/react'

describe('sumAllNumbers', () => {
  it('Should return 0 with no passed numbers', () => {
    expect(sumAllNumbers([])).toBe(0)
  })

  it('Should return same number if we only pass 1 number', () => {
    expect(sumAllNumbers([4])).toBe(4)
  })

  it('Should the right result, with passed numbers', () => {
    expect(sumAllNumbers([2, 2, 2, 4])).toBe(10)
    expect(sumAllNumbers([2, 2])).toBe(4)
  })
})
