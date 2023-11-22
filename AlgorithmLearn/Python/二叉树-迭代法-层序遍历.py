from collections import deque


class Solution:
    def binaryTree(self, root: Optional[TreeNode]):
        q = deque()
        if root:
            q.append(root)
        while q:
            for i in range(len(q)):
                ptr = q.popleft()
                print(ptr.val)
                if ptr.left:
                    q.append(ptr.left)
                if ptr.right:
                    q.append(ptr.right)
