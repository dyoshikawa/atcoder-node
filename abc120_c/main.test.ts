import { main } from './main'

describe('tests', () => {
  test('1', () => {
    expect(main('0011')).toEqual(4)
  })

  test('2', () => {
    expect(main('11011010001011')).toEqual(12)
  })

  test('3', () => {
    expect(main('0')).toEqual(0)
  })

  test('random_2', () => {
    expect(main('01111110000')).toEqual(10)
  })
})
