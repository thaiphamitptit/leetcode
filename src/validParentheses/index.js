import { isValid } from './validParentheses.js'

const app = () => {
  const inputs = ['()', '()[]{}', '(]']
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(isValid(input))
  })
}

app()
