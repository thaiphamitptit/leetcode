const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}

const combination = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k))
}

const generate1 = (numRows) => {
  const rows = []

  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j <= i; j++) {
      row.push(combination(i, j))
    }
    rows.push(row)
  }

  return rows
}

const generate2 = (numRows) => {
  const dp = []

  for (let i = 0; i < numRows; i++) {
    const row = []
    if (i === 0) {
      row.push(1)
    } else {
      row.push(1)
      for (let j = 0; j < dp[i - 1].length - 1; j++) {
        row.push(dp[i - 1][j] + dp[i - 1][j + 1])
      }
      row.push(1)
    }
    dp.push(row)
  }

  return dp
}

export const generate = (numRows) => {
  return Math.round(Math.random()) ? generate1(numRows) : generate2(numRows)
}
