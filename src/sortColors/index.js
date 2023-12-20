import { sortColors } from './sortColors.js'

const app = () => {
  const inputs = [
    [2, 0, 2, 1, 1, 0],
    [2, 0, 1]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(sortColors(input))
  })
}

app()