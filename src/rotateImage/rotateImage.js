export const rotate = (matrix) => {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let low = i
    let high = n - i - 1

    for (let j = low; j < high; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = tmp
    }
  }
}
