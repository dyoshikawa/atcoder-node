export const main = (r: number): number => {
  return r ** 2 * 3
}

const exec = () => {
  const r: string = require('fs').readFileSync('/dev/stdin', 'UTF-8')

  const res = main(Number(r))
  console.log(res)
}

exec()
