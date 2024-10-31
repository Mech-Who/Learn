/*
 * @lc app=leetcode.cn id=2 lang=cpp
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* p1 = l1;
        ListNode* p2 = l2;
        ListNode* res = new ListNode();
        ListNode* p3 = res;
        int sum = 0;
        int pre_add = 0;
        while(p1!=nullptr && p2!=nullptr) {
            sum = p1->val + p2->val + pre_add;
            pre_add = sum / 10;
            sum %= 10;
            p3->next = new ListNode(sum);
            p3 = p3->next;
            p1 = p1->next;
            p2 = p2->next;
        }
        while(p1!=nullptr) {
            sum = p1->val + pre_add;
            pre_add = sum / 10;
            sum %= 10;
            p3->next = new ListNode(sum);
            p3 = p3->next;
            p1 = p1->next;
        }
        while(p2!=nullptr) {
            sum = p2->val + pre_add;
            pre_add = sum / 10;
            sum %= 10;
            p3->next = new ListNode(sum);
            p3 = p3->next;
            p2 = p2->next;
        }
        if (pre_add > 0) {
            p3->next = new ListNode(pre_add);
        }
        p3 = res->next;
        delete res;
        return p3;
    }
};
// @lc code=end

