import { plusOne } from './plusOne.js'

const app = () => {
  const inputs = [[1, 9, 6], [9, 9]]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(plusOne(input))
  })
}

app()
