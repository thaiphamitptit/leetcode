import { searchInsert } from './searchInsertPosition.js'

const app = () => {
  const inputs = [
    {
      numbers: [1, 2, 4, 5],
      target: 2
    },
    {
      numbers: [1, 2, 4, 5],
      target: 3
    },
    {
      numbers: [1, 2, 4, 5],
      target: 6
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(searchInsert(input.numbers, input.target))
  })
}

app()
