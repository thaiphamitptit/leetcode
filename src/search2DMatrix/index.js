import { searchMatrix } from './search2DMatrix.js'

const app = () => {
  const inputs = [
    {
      matrix: [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]
      ],
      target: 3
    },
    {
      matrix: [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]
      ],
      target: 13
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(searchMatrix(input.matrix, input.target))
  })
}

app()
