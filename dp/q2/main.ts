export const main = (
  n: number,
  W: number,
  vList: number[],
  wList: number[]
) => {
  const dp: number[][] = []

  for (let i = 0; i <= n; i++) {
    dp.push([])
    for (let w = 0; w <= W; w++) {
      dp[i].push(0)
    }
  }

  for (let i = 0; i < n; i++) {
    for (let w = 0; w <= W; w++) {
      if (w >= wList[i])
        dp[i + 1][w] = Math.max(dp[i][w - wList[i]] + vList[i], dp[i][w])
      else dp[i + 1][w] = dp[i][w]
    }
  }

  return Math.max.apply(null, dp.flat())
}
