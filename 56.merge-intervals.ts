/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
const swap = (intervals: number[][], i: number, j: number) => {
  const temp = intervals[i];
  intervals[i] = intervals[j];
  intervals[j] = temp;
};
function merge(intervals: number[][]): number[][] {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;
  while (i < sorted.length - 1) {
    const curr = sorted[i];
    const next = sorted[i + 1];

    if (curr[1] >= next[0]) {
      if (curr[1] >= next[1]) {
        sorted[i + 1] = [];
        swap(intervals, i, i + 1);
      } else {
        sorted[i][1] = next[1];
        sorted[i + 1] = [];
        swap(intervals, i, i + 1);
      }
    }
    i+=1
  }
  return sorted.filter((item) => item.length !== 0);
}
// @lc code=end
