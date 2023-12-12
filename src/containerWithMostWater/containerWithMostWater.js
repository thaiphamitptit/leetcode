export const maxArea = (height) => {
  let maxArea = 0
  let area = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left)
    maxArea = Math.max(area, maxArea)

    if (height[left] < height[right]) {
      do {
        left++
      } while (left < right && height[left - 1] >= height[left])
    } else {
      do {
        right--
      } while (left < right && height[right + 1] >= height[right])
    }
  }

  return maxArea
}
