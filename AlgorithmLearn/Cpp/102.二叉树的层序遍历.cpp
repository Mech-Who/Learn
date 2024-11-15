/*
 * @lc app=leetcode.cn id=102 lang=cpp
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (root == nullptr)
            return vector<vector<int>>();
        deque<TreeNode*> nodes;
        nodes.push_back(root);
        vector<vector<int>> fres;
        while(!nodes.empty()){
            vector<int> res;
            int size = nodes.size();
            for (int ix=0; ix < size; ++ix){
                TreeNode* cur = nodes.front();
                nodes.pop_front();
                res.push_back(cur->val);
                if(cur->left != nullptr)
                    nodes.push_back(cur->left);
                if(cur->right != nullptr)
                    nodes.push_back(cur->right);
            }
            fres.push_back(res);
        }
        return fres;
    }
};
// @lc code=end

