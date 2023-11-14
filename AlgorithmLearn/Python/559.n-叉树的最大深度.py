#
# @lc app=leetcode.cn id=559 lang=python3
#
# [559] N 叉树的最大深度
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
class Solution:
    def maxDepth(self, root: 'Node') -> int:
        return self.getDepth(root)

    def getDepth(self, node):
        if node: return 0
        depths = []
        for child in node.children:
            child_depth = self.getDepth(child)
            depths.append(child_depth)
        return 1 + max(depths)
# @lc code=end
