import { mergeTwoLists } from './mergeTwoSortedLists.js'
import { createLinkedListFromArray, createArrayFromLinkedList } from '../helper/utils.js'

const app = () => {
  const inputs = [
    {
      list1: createLinkedListFromArray([1, 2, 6]),
      list2: createLinkedListFromArray([3, 4, 5])
    },
    {
      list1: createLinkedListFromArray([]),
      list2: createLinkedListFromArray([])
    },
    {
      list1: createLinkedListFromArray([]),
      list2: createLinkedListFromArray([0])
    }
  ]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(createArrayFromLinkedList(mergeTwoLists(input.list1, input.list2)))
  })
}

app()
