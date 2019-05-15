import { main } from './main'

describe('tests', () => {
  it('1', () => {
    expect(main(8, 3, 'ACACTACG', [[3, 7], [2, 3], [1, 8]])).toEqual([2, 0, 3])
  })
})
