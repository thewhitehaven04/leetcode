/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let lo = 0
    let hi = nums.length - 1
    let zeroesCount = 0
    let twosCount = 0

    while (hi >= 0 && lo <= nums.length - 1) {
        if (nums[lo] === 0) {
            zeroesCount++
        }
        lo++
        if (nums[hi] === 2) {
            twosCount++
        }
        hi--;
    }
    nums.fill(0, 0, zeroesCount)
    nums.fill(1, zeroesCount, nums.length - twosCount)
    nums.fill(2, nums.length - twosCount, nums.length)
};
// @lc code=end

