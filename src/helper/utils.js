function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

export const createLinkedListFromArray = (arr) => {
  let head = null
  let curr = head
  for (let i = 0; i < arr.length; i++) {
    if (head === null) {
      head = curr = new ListNode(arr[i])
    } else {
      curr.next = new ListNode(arr[i])
      curr = curr.next
    }
  }

  return head
}

export const createArrayFromLinkedList = (list) => {
  const arr = []
  while (list !== null) {
    arr.push(list.val)
    list = list.next
  }

  return arr
}
