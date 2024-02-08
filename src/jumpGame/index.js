import { canJump } from './jumpGame.js'

const app = () => {
  const inputs = [
    [2, 3, 1, 1, 4],
    [3, 2, 1, 0, 4]
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(canJump(input))
  })
}

app()
