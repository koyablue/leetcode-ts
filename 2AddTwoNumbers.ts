import { ListNode } from './models/ListNode'

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummy = new ListNode()
  let current = dummy
  let carry = 0

  while (l1 || l2 || carry) {
    let val = (l1?.val || 0) + (l2?.val || 0) + carry
    current.next = new ListNode(val % 10)
    carry = Math.floor(val / 10)

    l1 = l1?.next || null
    l2 = l2?.next || null
    current = current.next
  }

  return dummy.next
}

const addTwoNumbersRecursion = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const _addTwoNumbers = (l1: ListNode | null | undefined, l2: ListNode | null | undefined, resultListNode: ListNode) => {
    let val = (l1?.val || 0) + (l2?.val || 0) + resultListNode.val
    resultListNode.val = val % 10
    const nextNum = Math.floor(val / 10)

    if (!l1?.next && !l2?.next) {
      if (nextNum) {
        resultListNode.next = new ListNode(nextNum)
      }
      return
    }
    resultListNode.next = new ListNode(nextNum)
    _addTwoNumbers(l1?.next, l2?.next, resultListNode)
  }

  let resultListNode = new ListNode()
  _addTwoNumbers(l1, l2, resultListNode)
  return resultListNode
}