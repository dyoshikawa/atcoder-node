export const main = (
  N: number,
  M: number,
  abList: Array<Array<number>>
): number => {
  abList.sort((x, y) => {
    if (x[0] < y[0]) return -1
    if (x[0] > y[0]) return 1
    return 0
  })

  let res = 0
  let remain = M
  for (let i = 0; i < N; i++) {
    const [a, b] = abList[i]
    if (b < remain) {
      res += a * b
      remain -= b
    } else {
      res += a * remain
      break
    }
  }

  return res
}
