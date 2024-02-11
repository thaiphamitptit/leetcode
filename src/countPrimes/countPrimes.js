export const countPrimes = (num) => {
  const isPrimer = new Array(num).fill(true)
  for (let i = 2; i * i < num; i++) {
    if (isPrimer[i]) {
      for (let j = i * i; j < num; j += i) {
        isPrimer[j] = false
      }
    }
  }
  let cnt = 0
  for (let i = 2; i < num; i++) {
    if (isPrimer[i]) {
      cnt++
    }
  }

  return cnt
}
