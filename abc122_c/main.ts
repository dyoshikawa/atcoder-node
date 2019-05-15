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

const input: string = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const lines = input.split('\n')

const NQ = lines[0].split(' ')
const N = Number(NQ[0])
const Q = Number(NQ[1])
const S = lines[1]

const lrList: Array<Array<number>> = []
for (let i = 0; i < Q; i++) {
  lrList.push(lines[2 + i].split(' ').map(l => Number(l)))
}

const res = main(N, Q, S, lrList)
res.forEach(r => console.log(r))
