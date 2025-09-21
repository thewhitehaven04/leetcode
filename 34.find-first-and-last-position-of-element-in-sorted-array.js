/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    let lo = 0;
    let hi = nums.length - 1

    let targetIndex = -1;
    let mid = Math.floor((hi - lo) / 2);
    while (lo <= hi) {
        mid = Math.floor((hi - lo) / 2);
        if (nums[mid] > target) {
            lo = mid;
        } else if (nums[mid] < target) {
            hi = mid;
        } else {
            targetIndex = mid;
            break;
        }
    }
    let loTargetIndex = -1;
    if (nums[targetIndex - 1] !== nums[targetIndex]) {
        loTargetIndex = targetIndex;
    }
    let hiTargetIndex = -1;
    if (nums[targetIndex + 1] !== nums[targetIndex]) {
        hiTargetIndex = targetIndex;
    }

    return [loTargetIndex, hiTargetIndex];
};
// @lc code=end

