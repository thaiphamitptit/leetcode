function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

export const mergeTwoLists = (list1, list2) => {
  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }

  let head = null
  let curr = head

  while (list1 !== null && list2 !== null) {
    let tmp = null
    if (list1.val < list2.val) {
      tmp = list1
      list1 = list1.next
    } else {
      tmp = list2
      list2 = list2.next
    }

    if (head === null) {
      head = curr = tmp
    } else {
      curr.next = tmp
      curr = curr.next
    }
  }
  curr.next = list1 !== null ? list1 : list2

  return head
}
