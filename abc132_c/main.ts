export const main = (_N: number, dList: number[]): number => {
  const sortedDList = [...dList].sort((a, b) => a - b)
  if (sortedDList.length % 2 !== 0) return 0
  const half = sortedDList.length / 2

  return sortedDList[half] - sortedDList[half - 1]
}

const exec = () => {
  const input: string = require('fs').readFileSync('/dev/stdin', 'UTF-8')
  const [N, D] = input.split('\n')

  const dList = D.split(' ').map(d => Number(d))

  const res = main(Number(N), dList)
  console.log(res)
}

exec()
