const binarySearch = (numbers, low, high, target) => {
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (numbers[mid] === target) {
      return mid
    }
    if (numbers[mid] < target) {
      low = mid + 1
    }
    if (numbers[mid] > target) {
      high = mid - 1
    }
  }

  return -1
}

export const searchRange = (numbers, target) => {
  let low = -1
  let high = -1

  let pos = binarySearch(numbers, 0, numbers.length - 1, target)
  let range = []

  if (pos >= 0) {
    low = high = pos
  }

  let l = low
  do {
    low = l
    l = binarySearch(numbers, 0, low - 1, target)
  } while (l >= 0)

  let h = high
  do {
    high = h
    h = binarySearch(numbers, high + 1, numbers.length - 1, target)
  } while (h >= 0)
  
  range = [low, high]

  return range
}
