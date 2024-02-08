const check1 = (ch) => {
  return isNaN(ch) || ch === '0' ? 0 : 1
}

const check2 = (ch1, ch2) => {
  return ch1 === '1' || (ch1 === '2' && ch2 <= '6') ? 1 : 0
}

export const numDecodings = (str) => {
  if (str.length <= 0) {
    return 0
  }
  
  if (str.length === 1) {
    return check1(str[0])
  }

  const dp = new Array(str.length).fill(0)
  dp[0] = check1(str[0])
  dp[1] = check1(str[0]) * check1(str[1]) + check2(str[0], str[1])

  for (let i = 2; i < str.length; i++) {
    if (isNaN(str[i])) {
      break
    }
    if (check1(str[i])) {
      dp[i] = dp[i - 1]
    }
    if (check2(str[i - 1], str[i])) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[str.length - 1]
}
