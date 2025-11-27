/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
  let h = 0;
  let l = 0;

  const lastIndex = nums.length - 1;
  while (h <= lastIndex) {
    if (nums[l] !== 0) {
      h++;
      l++;
    } else {
      while (nums[h] === 0) {
        h++;
      }
      // swap
      if (h < nums.length) {
        const zero = nums[l];
        nums[l] = nums[h];
        nums[h] = zero;
      }
    }
  }
}
// @lc code=end
