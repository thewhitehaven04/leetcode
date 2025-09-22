/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let area = 0;

  while (left < right) {
    const l = height[left];
    const r = height[right];
    const newArea = Math.min(l, r) * (right - left);

    area = Math.max(area, newArea);

    if (l < r) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}
// @lc code=end
