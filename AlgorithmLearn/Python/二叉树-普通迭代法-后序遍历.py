from collections import deque


class Solution:
    def binaryTree(self, root: Optional[TreeNode]):
        q = deque()
        res = []
        if root:
            q.append(root)
        while q:
            ptr = q.pop()
            res.append(ptr.val)
            if ptr.left:
                q.append(ptr.left)
            if ptr.right:
                q.append(ptr.right)
        print(list(reversed(res)))
