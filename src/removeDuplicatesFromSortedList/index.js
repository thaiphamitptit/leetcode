import { deleteDuplicates } from './removeDuplicatesFromSortedList.js'
import { createLinkedListFromArray, createArrayFromLinkedList } from '../helper/utils.js'

const app = () => {
  const inputs = [createLinkedListFromArray([1, 1, 2]), createLinkedListFromArray([1, 1, 2, 3, 3])]
  inputs.map((input) => {
    console.log(`Case ${inputs.indexOf(input) + 1}`)
    console.log(createArrayFromLinkedList(deleteDuplicates(input)))
  })
}

app()
