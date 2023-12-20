const climbStairs1 = (num) => {
  const dp = [1, 1]
  for (let i = 2; i <= num; i++) {
    let tmp = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = tmp
  }

  return dp[1]
}

const climbStairs2 = (num) => {
  const dp = new Array(num + 1).fill(1)
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[num]
}

export const climbStairs = (num) => {
  return Math.round(Math.random()) ? climbStairs1(num) : climbStairs2(num)
}
