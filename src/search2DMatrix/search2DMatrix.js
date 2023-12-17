const binarySearch = (numbers, key) => {
  let low = 0
  let high = numbers.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (numbers[mid] === key) {
      return mid
    }
    if (numbers[mid] < key) {
      low = mid + 1
    }
    if (numbers[mid] > key) {
      high = mid - 1
    }
  }

  return -1
}

const verticalBinarySearch = (matrix, key) => {
  let low = 0
  let high = matrix.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (matrix[mid][0] === key) {
      return mid
    }
    if (matrix[mid][0] < key) {
      low = mid + 1
    }
    if (matrix[mid][0] > key) {
      high = mid - 1
    }
  }

  return low - 1
}

const searchMatrix1 = (matrix, target) => {
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

const searchMatrix2 = (matrix, target) => {
  let index = verticalBinarySearch(matrix, target)
  if (index < 0) {
    return false
  }
  index = binarySearch(matrix[index], target)

  return index < 0 ? false : true
}

export const searchMatrix = (matrix, target) => {
  return Math.round(Math.random()) ? searchMatrix1(matrix, target) : searchMatrix2(matrix, target)
}
