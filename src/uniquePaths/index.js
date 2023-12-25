import { uniquePaths } from './uniquePaths.js'

const app = () => {
  const inputs = [
    { row: 3, col: 7 },
    { row: 3, col: 2 }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(uniquePaths(input.row, input.col))
  })
}

app()
