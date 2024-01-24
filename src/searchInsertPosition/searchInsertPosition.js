export const searchInsert = (numbers, target) => {
  let low = 0
  let high = numbers.length - 1

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

  return low
}
