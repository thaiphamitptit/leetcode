export const removeDuplicates = (numbers) => {
  let pos = 0
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i + 1]) {
      numbers[++pos] = numbers[i + 1]
    }
  }
  return ++pos
}
