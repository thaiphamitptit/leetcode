import { searchRange } from './searchRange.js'

const app = () => {
  const inputs = [
    {
      numbers: [1, 2, 2, 3, 3, 4],
      target: 3
    },
    {
      numbers: [1, 2, 2, 3, 3, 4],
      target: 6
    },
    {
      numbers: [],
      target: 0
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(searchRange(input.numbers, input.target))
  })
}

app()
