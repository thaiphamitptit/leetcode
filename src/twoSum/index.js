import { twoSum } from './twoSum.js'

const app = () => {
  const inputs = [
    {
      numbers: [2, 7, 11, 15],
      target: 9
    },
    {
      numbers: [3, 2, 4],
      target: 6
    },
    {
      numbers: [3, 3],
      target: 6
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(twoSum(input.numbers, input.target))
  })
}

app()
