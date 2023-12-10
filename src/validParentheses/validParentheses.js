export const isValid = (string) => {
  const stack = []

  for (let i = 0; i < string.length; i++) {
    let curr = string[i]
    switch (curr) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        let top = stack.pop()
        if (curr !== top) {
          return false
        }
    }
  }

  return stack.length === 0
}
