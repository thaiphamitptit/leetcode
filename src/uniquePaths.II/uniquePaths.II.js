const uniquePathsWithObstacles1 = (obstacleGrid) => {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))
  dp[0][0] = obstacleGrid[0][0] ? 0 : 1

  for (let r = 1; r < row; r++) {
    dp[r][0] = obstacleGrid[r][0] ? 0 : dp[r - 1][0]
  }

  for (let c = 1; c < col; c++) {
    dp[0][c] = obstacleGrid[0][c] ? 0 : dp[0][c - 1]
  }

  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      dp[r][c] = obstacleGrid[r][c] === 1 ? 0 : dp[r][c - 1] + dp[r - 1][c]
    }
  }

  return dp[row - 1][col - 1]
}

const uniquePathsWithObstacles2 = (obstacleGrid) => {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  const matrix = new Array(row).fill(0).map(() => new Array(col).fill(0))
  let max = 0

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        max = matrix[i][j] = 0
      } else {
        if (i > 0 && j > 0) {
          max = matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
        } else if (i > 0) {
          max = matrix[i][j] = matrix[i - 1][j]
        } else if (j > 0) {
          max = matrix[i][j] = matrix[i][j - 1]
        } else {
          max = matrix[i][j] = 1
        }
      }
    }
  }

  return max
}

export const uniquePathsWithObstacles = (obstacleGrid) => {
  return Math.round(Math.random()) ? uniquePathsWithObstacles1(obstacleGrid) : uniquePathsWithObstacles2(obstacleGrid)
}
