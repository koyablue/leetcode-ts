import { ListNode } from './models/ListNode'


const detectCycle = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return null

  let slow: ListNode | null | undefined = head
  let fast: ListNode | null | undefined  = head

  while (fast !== null && fast.next !== null) {
    slow = slow?.next
    fast = fast.next.next

    if (slow === fast) break
  }

  if (slow !== fast) return null

  let pointer: ListNode | null  = head
  while (pointer !== fast) {
    pointer = pointer!.next
    fast = fast?.next
  }

  return pointer
}
