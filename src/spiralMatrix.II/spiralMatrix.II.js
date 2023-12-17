export const generateMatrix = (num) => {
  const row = num
  const col = num
  const matrix = new Array(row).fill(0).map(() => new Array(col).fill(0))
  let cnt = 1

  for (let r = 0, c = 0; r < Math.floor((row + 1) / 2) && c < Math.floor((col + 1) / 2); r++, c++) {
    for (let i = c; i < col - c; i++) {
      matrix[r][i] = cnt++
    }
    for (let i = r + 1; i < row - r; i++) {
      matrix[i][col - c - 1] = cnt++
    }
    for (let i = col - c - 2; row - r - 1 > r && i >= c; i--) {
      matrix[row - r - 1][i] = cnt++
    }
    for (let i = row - r - 2; col - c - 1 > c && i > r; i--) {
      matrix[i][c] = cnt++
    }
  }

  return matrix
}
