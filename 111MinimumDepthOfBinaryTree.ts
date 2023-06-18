import { TreeNode } from './models/binaryTreeNode'

function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  const leftDepth = minDepth(root.left) + 1
  const rightDepth = minDepth(root.right) + 1

  if (!root.left) return rightDepth
  if (!root.right) return leftDepth

  return Math.min(leftDepth, rightDepth)
}
