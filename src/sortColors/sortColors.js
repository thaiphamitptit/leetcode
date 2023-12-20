export const sortColors = (numbers) => {
  let zero = 0
  let two = numbers.length - 1

  for (let i = 0; i <= two; i++) {
    if (numbers[i] === 0) {
      ;[numbers[zero], numbers[i]] = [numbers[i], numbers[zero]]
      zero++
    }
    if (numbers[i] === 2) {
      ;[numbers[two], numbers[i]] = [numbers[i], numbers[two]]
      two--
      i--
    }
  }

  return numbers
}
