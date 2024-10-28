class Solution {
public:
    int search(vector<int>& nums, int target) {
        int right = nums.size()-1;
        int left = 0;
        int i = (right + left) / 2;
        // cout << left << " " << right << " " << i << endl; // 调试信息
        while(left <= right){ // point 1: 退出条件
            if(nums[i] < target)
                left = i+1; // point 2: 小了就从后一个开始
            else if(nums[i] > target)
                right = i-1;// point 2: 大了就从前一个开始
            else
                return i;
            i = (right + left) / 2; // point 3: 更新指中索引
            // cout << left << " " << right << " " << i << endl; // 调试信息
        }
        return -1;
    }
};