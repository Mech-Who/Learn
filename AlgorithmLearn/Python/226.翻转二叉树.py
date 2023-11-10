#
# @lc app=leetcode.cn id=226 lang=python3
#
# [226] 翻转二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        q = deque()
        if root:
            q.append(root)
        while q:
            current = q[-1]
            if current:
                current = q.pop()

                if current.left:
                    q.append(current.left)

                q.append(current)
                q.append(None)
                
                if current.right:
                    q.append(current.right)
            else:
                q.pop()
                current = q.pop()
                current.left, current.right = current.right, current.left

        return root


# @lc code=end

