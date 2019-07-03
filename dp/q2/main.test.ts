import { main } from './main'

describe('tests', () => {
  test('1', () => {
    expect(main(6, 8, [3, 2, 6, 1, 3, 85], [2, 1, 3, 2, 1, 5])).toBe(91)
  })
})
