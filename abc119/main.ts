export const main = (S: string): number => {
  let sList = S.split('')
  let res = 0

  const st: string[] = []

  for (let i = 0; i < sList.length; i++) {
    if (st.length === 0 || st[st.length - 1] === sList[i]) {
      st.push(sList[i])
    } else {
      res += 2
      st.pop()
    }
  }

  return res
}

const input: string = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const lines = input.split('\n')
const res = main(lines[0])
console.log(res)
