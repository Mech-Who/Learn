from collections import deque


class Solution:
    def binaryTree(self, root: Optional[TreeNode]):
        q = deque()
        if root:
            q.append(root)
        while q:
            ptr = q.pop()
            if ptr:
                q.append(ptr)
                q.append(None)
                if ptr.right:
                    q.append(ptr.right)
                if ptr.left:
                    q.append(ptr.left)
            else:
                ptr = q.pop()
                print(ptr.val)
