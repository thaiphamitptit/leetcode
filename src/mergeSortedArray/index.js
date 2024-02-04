import { merge } from './mergeSortedArray.js'

const app = () => {
  const inputs = [
    {
      numbers1: [1, 2, 3, 0, 0, 0],
      m: 3,
      numbers2: [2, 5, 6],
      n: 3
    },
    {
      numbers1: [1],
      m: 1,
      numbers2: [],
      n: 0
    },
    {
      numbers1: [0],
      m: 0,
      numbers2: [1],
      n: 1
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    merge(input.numbers1, input.m, input.numbers2, input.n)
    console.log(input.numbers1)
  })
}

app()
