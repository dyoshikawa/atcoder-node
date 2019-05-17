import { main } from './main'

describe('tests', () => {
  test('1', () => {
    expect(main(2, 5, [[4, 9], [2, 4]])).toEqual(12)
  })

  test('2', () => {
    expect(main(4, 30, [[6, 18], [2, 5], [3, 10], [7, 9]])).toEqual(130)
  })
})
