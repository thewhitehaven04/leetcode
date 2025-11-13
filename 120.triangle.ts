/*
 * @lc app=leetcode id=120 lang=typescript
 *
 * [120] Triangle
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  let values = triangle[triangle.length - 1];

  let level = triangle.length - 2;
  while (level >= 0) {
    let newValues: number[] = [];
    for (let i = 0; i < triangle[level].length; i++) {
      newValues.push(triangle[level][i] + Math.min(values[i], values[i+1]));
    }
    values = newValues;
    level--;
  }
  return Math.min(...values);
}

const k = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
console.log(k);
// @lc code=end
