import { removeDuplicates } from './removeDuplicatesFromSortedArray.js'

const app = () => {
  const inputs = [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(removeDuplicates(input))
  })
}

app()
