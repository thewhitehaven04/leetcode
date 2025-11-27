/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const triangle = [[1]];
  if (numRows === 1) {
    return triangle;
  }
  for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
    const triangleRow = [1];
    for (let k = 1; k < rowIndex; k++) {
      triangleRow.push(
        triangle[rowIndex - 1][k - 1] + triangle[rowIndex - 1][k]
      );
    }
    triangleRow.push(1);
    triangle.push(triangleRow);
  }
  return triangle;
}
// @lc code=end
