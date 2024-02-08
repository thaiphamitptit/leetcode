export const canJump = (numbers) => {
  let coverPos = 0
  for (let i = 0; i <= coverPos && i < numbers.length; i++) {
    if (coverPos < numbers[i] + i) {
      coverPos = numbers[i] + i
    }
    if (coverPos >= numbers.length - 1) {
      return true
    }
  }

  return false
}
