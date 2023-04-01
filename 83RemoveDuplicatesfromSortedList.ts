import { ListNode } from './ListNode'

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head) return null
  if (!head.next) return head

  let pointer = head
  while (pointer && pointer?.next) {
    pointer.val === pointer.next.val ? pointer.next = pointer.next.next : pointer = pointer.next
  }

  return head
}
