import { swapPairs } from './swapNodesInPairs.js'
import { createLinkedListFromArray, createArrayFromLinkedList } from '../helper/utils.js'

const app = () => {
  const inputs = [
    createLinkedListFromArray([1, 2, 3, 4]),
    createLinkedListFromArray([]),
    createLinkedListFromArray([1])
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(createArrayFromLinkedList(swapPairs(input)))
  })
}

app()
