import { countPrimes } from './countPrimes.js'

const app = () => {
  const inputs = [2002, 6, 19]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(countPrimes(input))
  })
}

app()
