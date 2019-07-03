export const main = (n: number, a: number[]) => {
  const dp: number[] = [0]
  for (let i = 0; i < n; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i] + a[i])
  }
  return Math.max.apply(null, dp)
}
