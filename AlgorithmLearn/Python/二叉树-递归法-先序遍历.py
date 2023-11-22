from collections import deque


class Solution:
    def binaryTree(self, root: Optional[TreeNode]):
        if not root:
            return 0
        print(root.val)
        self.binaryTree(root.left)
        self.binaryTree(root.right)
