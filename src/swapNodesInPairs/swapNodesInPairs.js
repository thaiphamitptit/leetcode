function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

export const swapPairs = (head) => {
  let curr = head
  while (curr !== null && curr.next !== null) {
    ;[curr.val, curr.next.val] = [curr.next.val, curr.val]
    curr = curr.next.next
  }

  return head
}
