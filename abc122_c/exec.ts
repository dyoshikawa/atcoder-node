import { main } from './main'

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
