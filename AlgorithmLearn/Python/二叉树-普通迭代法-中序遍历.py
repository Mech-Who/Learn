from collections import deque


class Solution:
    def binaryTree(self, root: Optional[TreeNode]):
        q = deque()
        ptr = root
        while q or ptr:
            if ptr:
                q.append(ptr)
                q.append(ptr.left)
                ptr = ptr.left
            else:
                q.pop()
                ptr = q.pop()
                print(ptr.val)
                ptr = ptr.right
