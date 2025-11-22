/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
//   class TreeNode {
//       val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.left = (left===undefined ? null : left)
//           this.right = (right===undefined ? null : right)
//       }
//   }

const inOrder = (node: TreeNode | null, acc: (number | undefined | null)[]) => {
  if (node === null) {
    acc.push(undefined)
    return
  }

  inOrder(node.left, acc);
  acc.push(node.val);
  inOrder(node.right, acc);
};

function isSymmetric(root: TreeNode | null): boolean {
  const left: (number | undefined | null)[] = [];
  const right: (number | undefined | null)[] = [];
  if (root) {
    inOrder(root.left, left);
    inOrder(root.right, right);
  }
  console.log(left, right)

  if (left.length !== right.length) {
    return false
  }

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[right.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
