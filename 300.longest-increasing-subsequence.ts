/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
const bsLessThan = (arr: number[], value: number) => {
  /**
   * find the index of an element that is smaller than the value,
   * but arr[index+1] is greater
   */
  let lo = 0;
  let hi = arr.length - 1;

  let index = null;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] < value) {
      lo = mid + 1;
    } else {
      index = mid;
      hi = mid - 1;
    }
  }
  return index;
};

function lengthOfLIS(nums: number[]): number {
  const accumulator = [];

  for (const target of nums) {
    const index = bsLessThan(accumulator, target);
    if (index === null) {
      accumulator.push(target);
    } else {
      accumulator[index] = target;
    }
  }

  return accumulator.length;
}
// @lc code=end
