const isPalindrome1 = (str) => {
  const ori = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  const rev = ori.split('').reduce((acc, char) => char + acc, '')

  return ori === rev
}

const isPalindrome2 = (str) => {
  const ori = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  const rev = ori.split('').reverse().join('')

  return ori === rev
}

export const isPalindrome = (str) => {
  return Math.round(Math.random()) ? isPalindrome1(str) : isPalindrome2(str)
}
