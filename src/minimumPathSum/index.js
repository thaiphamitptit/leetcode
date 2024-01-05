import { minPathSum } from './minimumPathSum.js'

const app = () => {
  const inputs = [
    [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ],
    [
      [1, 2, 3],
      [4, 5, 6]
    ]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(minPathSum(input))
  })
}

app()
