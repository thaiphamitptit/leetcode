export const romanToInt = (string) => {
  const symbols = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
  let num = symbols[string[0]]

  for (let i = 1; i < string.length; i++) {
    let curr = symbols[string[i]]
    let prev = symbols[string[i - 1]]
    
    if (curr > prev) {
      num = num - prev + curr - prev
    } else {
      num += curr
    }
  }

  return num
}
