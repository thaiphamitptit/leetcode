const setZeroes1 = (matrix) => {
  const row = new Array(matrix.length)
  const col = new Array(matrix[0].length)

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        row[r] = true
        col[c] = true
      }
    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (row[r] || col[c]) {
        matrix[r][c] = 0
      }
    }
  }
}

const setZeroes2 = (matrix) => {
  let bRow = false
  let cCol = false

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        if (r === 0) {
          bRow = true
        }
        if (c === 0) {
          cCol = true
        }
        matrix[0][c] = matrix[r][0] = 0
      }
    }
  }

  for (let r = 1; r < matrix.length; r++) {
    for (let c = 1; c < matrix[0].length; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0
      }
    }
  }

  if (bRow) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[0][c] = 0
    }
  }

  if (cCol) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][0] = 0
    }
  }
}

export const setZeroes = (matrix) => {
  return Math.round(Math.random()) ? setZeroes1(matrix) : setZeroes2(matrix)
}
