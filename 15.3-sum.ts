/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((a, b) => a - b);
  const triplets: number[][] = [];
  for (let i = 0; i < sorted.length - 2; i++) {
    const first = sorted[i];
    // right => left
    let leftIndex = i+1;
    let rightIndex = sorted.length - 1;

    while (leftIndex < rightIndex) {
      const left = sorted[leftIndex]
      const right = sorted[rightIndex]
      if (left + right === -first) {
        if (!triplets.find((triplet) => (triplet[0] === first && triplet[1] === left && triplet[2] === right))) {
            triplets.push([first, left, right]);
        }
        leftIndex += 1;
        rightIndex -= 1;
      } else if (left + right > -first) {
        rightIndex -= 1;
      } else {
        leftIndex += 1;
      }
    }
  }

  return triplets
}
// @lc code=end
