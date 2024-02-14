const uniquePaths1 = (row, col) => {
  const matrix = new Array(row * col).fill(0)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 || j == 0) {
        matrix[i * col + j] = 1
      } else {
        matrix[i * col + j] = matrix[(i - 1) * col + j] + matrix[i * col + j - 1]
      }
    }
  }

  return matrix[row * col - 1]
}

const uniquePaths2 = (row, col) => {
  const matrix = new Array(row).fill(0).map(() => new Array(col).fill(0))
  for (let i = 0; i < row; i++) {
    matrix[i][0] = 1
  }

  for (let i = 0; i < col; i++) {
    matrix[0][i] = 1
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
    }
  }

  return matrix[row - 1][col - 1]
}

export const uniquePaths = (row, col) => {
  return Math.round(Math.random()) ? uniquePaths1(row, col) : uniquePaths2(row, col)
}
