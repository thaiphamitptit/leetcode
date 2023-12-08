const twoSum1 = (numbers, target) => {
  const map = new Map()
  let indices = []

  for (let i = 0; i < numbers.length; i++) {
    if (!map.has(numbers[i])) {
      map.set(target - numbers[i], i)
    } else {
      indices = [map.get(numbers[i]), i]
      break
    }
  }

  return indices
}

const twoSum2 = (numbers, target) => {
  const map = new Map()
  let indices = []

  for (let i = 0; i < numbers.length; i++) {
    if (!map.has(target - numbers[i])) {
      map.set(numbers[i], i)
    } else {
      indices = [map.get(target - numbers[i]), i]
      break
    }
  }

  return indices
}

export const twoSum = (numbers, target) => {
  return Math.round(Math.random()) ? twoSum1(numbers, target) : twoSum2(numbers, target)
}
