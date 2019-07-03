const dp: number[] = []

export const fib1 = (n: number): number => {
  if (n <= 1) return 1
  if (dp[n] != null) return dp[n]
  return (dp[n] = fib1(n - 1) + fib1(n - 2))
}

// console.log(fib1(55))

export const fib2 = (n: number): number => {
  if (n == 0) return 1
  let n1 = 1
  let n2 = 1
  let n3 = 1
  for (let i = 0; i < n - 1; i++) {
    console.log(i)
    n3 = n1 + n2
    n1 = n2
    n2 = n3
  }
  return n2
}

console.log(fib2(10))
