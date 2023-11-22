from collections import deque


class Solution:
    def binaryTree(self, root: Optional[TreeNode]):
        if not root:
            return 0
        self.binaryTree(root.left)
        print(root.val)
        self.binaryTree(root.right)
