/*
代码随想录：https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html
*/

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int right = nums.size()-1;
        int left = 0;
        // cout << left << " " << right << " " << i << endl; // 调试信息
        while(left <= right){ // point 1: 退出条件，始终坚持根据查找区间的定义来做边界处理
            int i = (right + left) / 2;
            if(nums[i] < target)
                left = i+1; // point 2: 小了就从后一个开始
            else if(nums[i] > target)
                right = i-1;// point 2: 大了就从前一个开始
            else
                return i;
            // cout << left << " " << right << " " << i << endl; // 调试信息
        }
        return -1;
    }
};