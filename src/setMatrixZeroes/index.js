import { setZeroes } from './setMatrixZeroes.js'

const app = () => {
  const inputs = [
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5]
    ]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(setZeroes(input))
  })
}

app()
