import { addBinary } from './addBinary.js'

const app = () => {
  const inputs = [
    {
      a: '1',
      b: '11'
    },
    {
      a: '1010',
      b: '1011'
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(addBinary(input.a, input.b))
  })
}

app()
