import { singleNumber } from './singleNumber.js'

const app = () => {
  const inputs = [[1], [1, 1, 0], [4, 1, 2, 1, 2]]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(singleNumber(input))
  })
}

app()
