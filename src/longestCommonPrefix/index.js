import { longestCommonPrefix } from './longestCommonPrefix.js'

const app = () => {
  const inputs = [
    ['abab', 'abc', 'aba'],
    ['abcde', 'acd', 'bc']
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(longestCommonPrefix(input))
  })
}

app()
