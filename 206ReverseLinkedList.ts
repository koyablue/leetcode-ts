import { ListNode } from './ListNode'


const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head

  let current: ListNode | null = head
  let prev: ListNode | null = null
  while (current) {
    const currentNext = current.next
    current.next = prev
    prev = current
    current = currentNext
  }

  return prev
}
