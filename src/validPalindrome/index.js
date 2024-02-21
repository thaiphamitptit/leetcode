import { isPalindrome } from './validPalindrome.js'

const app = () => {
  const inputs = ['A man, a plan, a canal: Panama', 'stay at home', '']
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(isPalindrome(input))
  })
}

app()
