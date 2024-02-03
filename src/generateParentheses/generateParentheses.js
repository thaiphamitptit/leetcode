const generator = (parentheses, left, right, str) => {
  if (left === 0 && right === 0) {
    parentheses.push(str)
    return
  }

  if (left > 0) {
    generator(parentheses, left - 1, right, str + '(')
  }

  if (right > 0 && right > left) {
    generator(parentheses, left, right - 1, str + ')')
  }
}

export const generateParenthesis = (num) => {
  const parentheses = []
  const str = ''
  generator(parentheses, num, num, str)
  return parentheses
}
