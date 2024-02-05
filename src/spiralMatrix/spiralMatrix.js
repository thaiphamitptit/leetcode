export const spiralOrder = (matrix) => {
  const arr = []
  const row = matrix.length
  const col = matrix[0].length

  for (let r = 0, c = 0; r < Math.floor((row + 1) / 2) && c < Math.floor((col + 1) / 2); r++, c++) {
    for (let i = c; i < col - c; i++) {
      arr.push(matrix[r][i])
    }
    for (let i = r + 1; i < row - r; i++) {
      arr.push(matrix[i][col - c - 1])
    }
    for (let i = col - c - 2; row - r - 1 > r && i >= c; i--) {
      arr.push(matrix[row - r - 1][i])
    }
    for (let i = row - r - 2; col - c - 1 > c && i > r; i--) {
      arr.push(matrix[i][c])
    }
  }

  return arr
}
