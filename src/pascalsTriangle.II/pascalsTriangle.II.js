const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}

const combination = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k))
}

const getRow1 = (rowIndex) => {
  const row = []

  for (let i = 0; i <= rowIndex; i++) {
    row.push(combination(rowIndex, i))
  }

  return row
}

const getRow2 = (rowIndex) => {
  const row = new Array(rowIndex + 1).fill(0)

  row[0] = 1
  for (let i = 0; i < rowIndex; i++) {
    for (let j = i + 1; j > 0; j--) {
      row[j] += row[j - 1]
    }
  }

  return row
}

export const getRow = (rowIndex) => {
  return Math.round(Math.random()) ? getRow1(rowIndex) : getRow2(rowIndex)
}
