function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

export const removeElements = (head, val) => {
  if (head === null) {
    return null
  }

  let curr = head
  let prev = null

  while (curr !== null) {
    if (curr.val === val) {
      if (prev !== null) {
        prev.next = curr.next
      } else {
        head = head.next
      }
    } else {
      prev = curr
    }
    curr = curr.next
  }

  return head
}
