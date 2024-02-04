export const merge = (numbers1, m, numbers2, n) => {
  let a = m - 1
  let b = n - 1

  for (let i = m + n - 1; i >= 0; i--) {
    if (a >= 0 && b < 0) {
      break
    }
    if (a < 0 && b >= 0) {
      numbers1[i] = numbers2[b--]
      continue
    }
    if (a >= 0 && b >= 0) {
      if (numbers1[a] > numbers2[b]) {
        numbers1[i] = numbers1[a--]
      } else {
        numbers1[i] = numbers2[b--]
      }
    }
  }
}
