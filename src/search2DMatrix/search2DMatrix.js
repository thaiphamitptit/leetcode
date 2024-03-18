export const searchMatrix = (matrix, target) => {
  const row = matrix.length
  const col = matrix[0].length
  const len = row * col
  let low = 0
  let high = len - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    let r = Math.floor(mid / col)
    let c = mid % col

    let n = matrix[r][c]
    if (n === target) {
      return true
    }
    if (n < target) {
      low = mid + 1
    }
    if (n > target) {
      high = mid - 1
    }
  }

  return false
}
