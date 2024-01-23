const reverse = (num) => {
  let rev = 0

  while (num != 0) {
    rev = rev * 10 + (num % 10)
    num = Math.floor(num / 10)
  }

  return rev
}

export const isPalindrome = (num) => {
  return num >= 0 && num === reverse(num)
}
