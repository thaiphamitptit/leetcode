import { generateParenthesis } from './generateParentheses.js'

const app = () => {
  const inputs = [1, 2, 3, 4, 5]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(generateParenthesis(input))
  })
}

app()
