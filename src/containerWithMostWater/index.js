import { maxArea } from './containerWithMostWater.js'

const app = () => {
  const inputs = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
    [1, 1]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(maxArea(input))
  })
}

app()
