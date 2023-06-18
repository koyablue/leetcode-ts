import { TreeNode } from './models/binaryTreeNode'


function maxDepth(root: TreeNode | null): number {
  return dfs(root, 0)
}

function dfs(root: TreeNode | null, count: number): number {
  if (!root) return count

  count++
  return Math.max(dfs(root.left, count), dfs(root.right, count))
}
