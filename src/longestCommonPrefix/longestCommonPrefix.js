export const longestCommonPrefix = (strings) => {
  let word = ''
  if (strings.length <= 0) {
    return word
  }

  for (let i = 1; i <= strings[0].length; i++) {
    let w = strings[0].substr(0, i)
    let match = true

    for (let j = 1; j < strings.length; j++) {
      if (i > strings[j].length || w !== strings[j].substr(0, i)) {
        match = false
        break
      }
    }

    if (!match) {
      return word
    }
    word = w
  }

  return word
}
