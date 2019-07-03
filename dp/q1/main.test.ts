import { main } from './main'

describe('tests', () => {
  test('1', () => {
    expect(main(3, [1, 2, 3])).toBe(6)
  })
})
