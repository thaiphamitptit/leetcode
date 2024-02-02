import { removeElements } from './removeLinkedListElements.js'
import { createLinkedListFromArray, createArrayFromLinkedList } from '../helper/utils.js'

const app = () => {
  const inputs = [
    {
      head: createLinkedListFromArray([1, 2, 6, 3, 4, 5, 6]),
      val: 6
    },
    {
      head: createLinkedListFromArray([]),
      val: 1
    },
    {
      head: createLinkedListFromArray([7, 7, 7, 7]),
      val: 7
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(createArrayFromLinkedList(removeElements(input.head, input.val)))
  })
}

app()
