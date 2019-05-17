export const main = (
  N: number,
  _Q: number,
  S: string,
  lrList: Array<Array<number>>
): Array<number> => {
  const splitted = S.split('')

  const sList = [0]
  for (let i = 0; i < N; i++) {
    if (splitted[i] === 'A' && splitted[i + 1] === 'C') {
      sList.push(sList[i] + 1)
    } else {
      sList.push(sList[i])
    }
  }

  const res = lrList.map(lr => {
    const l = lr[0] - 1
    const r = lr[1] - 1

    return sList[r] - sList[l]
  })
  return res
}
