import { main } from './main'

describe('tests', () => {
  test('1', () => {
    expect(main(6, [9, 1, 4, 4, 6, 7])).toBe(2)
  })

  test('2', () => {
    expect(main(8, [9, 1, 14, 5, 5, 4, 4, 14])).toBe(0)
  })

  test('3', () => {
    expect(
      main(14, [
        99592,
        10342,
        29105,
        78532,
        83018,
        11639,
        92015,
        77204,
        30914,
        21912,
        34519,
        80835,
        100000,
        1,
      ])
    ).toBe(42685)
  })
  test('4', () => {
    expect(main(6, [1, 1, 1, 1, 1, 1])).toBe(0)
  })
})
