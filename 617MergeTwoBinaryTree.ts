import { TreeNode } from './models/binaryTreeNode'


function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null

  const v1 = root1?.val || 0
  const v2 = root2?.val || 0

  const root = new TreeNode(v1 + v2)

  root.left = mergeTrees(root1?.left || null, root2?.left || null)
  root.right = mergeTrees(root1?.right || null, root2?.right || null)

  return root
}