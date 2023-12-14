export const isValidSudoku = (board) => {
  const cnt = 9
  const row_mask = Array.from({ length: cnt }, () => Array(cnt).fill(false))
  const col_mask = Array.from({ length: cnt }, () => Array(cnt).fill(false))
  const area_mask = Array.from({ length: cnt }, () => Array(cnt).fill(false))

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (isNaN(board[r][c])) {
        continue
      }
      let idx = board[r][c] - 1

      if (row_mask[r][idx] === true) {
        return false
      }
      row_mask[r][idx] = true

      if (col_mask[c][idx] === true) {
        return false
      }
      col_mask[c][idx] = true

      let area = Math.floor(r / 3) * 3 + Math.floor(c / 3)
      if (area_mask[area][idx] === true) {
        return false
      }
      area_mask[area][idx] = true
    }
  }

  return true
}
