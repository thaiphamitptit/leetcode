import { romanToInt } from './romanToInteger.js'

const app = () => {
  const inputs = ['XIX', 'VI', 'MMII']
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(romanToInt(input))
  })
}

app()
