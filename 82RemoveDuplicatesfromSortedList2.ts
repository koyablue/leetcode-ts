import { ListNode } from './ListNode'


const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head) return null

  const dummy = new ListNode(0, head)
  let current = dummy
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      let dup = current.next.next
      while (dup.next && dup.val === dup.next.val) {
        dup = dup.next
      }
      current.next = dup.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}
