import { main } from './main'

const input: string = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const lines = input.split('\n')

const [N, M] = lines[0].split(' ').map(item => Number(item))

const abList: Array<Array<number>> = []
for (let i = 0; i < N; i++) {
  abList.push(lines[i + 1].split(' ').map(l => Number(l)))
}

const res = main(N, M, abList)
console.log(res)
