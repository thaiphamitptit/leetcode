import { numDecodings } from './decodeWays.js'

const app = () => {
  const inputs = ['19', '6', '2002', '104']
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(numDecodings(input))
  })
}

app()
