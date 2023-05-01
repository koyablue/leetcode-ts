import { ListNode } from './models/ListNode'

const hasCycle = (head: ListNode | null): boolean => {
  if (!head || !head.next) return false

  let slow: ListNode | null | undefined = head
  let fast: ListNode | null = head

  while (fast !== null && fast.next !== null) {
    slow = slow?.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}
