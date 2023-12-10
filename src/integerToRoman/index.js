import { intToRoman } from './integerToRoman.js'

const app = () => {
  const inputs = [19, 6, 2002]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(intToRoman(input))
  })
}

app()
