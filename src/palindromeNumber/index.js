import { isPalindrome } from './palindromeNumber.js'

const app = () => {
  const inputs = [2002, 0, -2002]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(isPalindrome(input))
  })
}

app()
