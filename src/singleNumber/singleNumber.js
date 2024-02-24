export const singleNumber = (numbers) => {
  numbers.sort()
  for (let i = 0; i < numbers.length; i++) {
    switch (i) {
      case 0:
        if (numbers[i] != numbers[i + 1]) {
          return numbers[i]
        }
        break
      case numbers.length - 1:
        if (numbers[i] != numbers[i - 1]) {
          return numbers[i]
        }
        break
      default:
        if (numbers[i] != numbers[i - 1] && numbers[i] != numbers[i + 1]) {
          return numbers[i]
        }
    }
  }
}
