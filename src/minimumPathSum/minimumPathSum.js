export const minPathSum = (grid) => {
  const row = grid.length
  const col = grid[0].length
  const matrix = new Array(row).fill(0).map(() => new Array(col).fill(0))

  matrix[0][0] = grid[0][0]
  for (let i = 1; i < row; i++) {
    matrix[i][0] = grid[i][0] + matrix[i - 1][0]
  }

  for (let i = 1; i < col; i++) {
    matrix[0][i] = grid[0][i] + matrix[0][i - 1]
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      matrix[i][j] = grid[i][j] + Math.min(matrix[i - 1][j], matrix[i][j - 1])
    }
  }

  return matrix[row - 1][col - 1]
}
