import { rotate } from './rotateImage.js'

const app = () => {
  const inputs = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    rotate(input)
    console.log(input)
  })
}

app()
