import { uniquePathsWithObstacles } from './uniquePaths.II.js'

const app = () => {
  const inputs = [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ],
    [
      [0, 1],
      [0, 0]
    ]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(uniquePathsWithObstacles(input))
  })
}

app()
