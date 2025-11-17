/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }

  nums1.splice(n, 0, ...nums2.slice(0, n))
}
// @lc code=end
