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
    const arr = sorted.slice(i + 1);
    
    const first = sorted[i];
    // right => left
    let leftIndex = arr[0];
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
      if (arr[leftIndex] + arr[rightIndex] === -first) {
        if (!triplets.find((triplet) => (triplet[0] === first && triplet[1] === arr[leftIndex] && triplet[2] === arr[rightIndex]))) {
            triplets.push([first, arr[leftIndex], arr[rightIndex]]);
        }
        leftIndex += 1;
        rightIndex -= 1;
      } else if (arr[leftIndex] + arr[rightIndex] > -first) {
        rightIndex -= 1;
      } else {
        leftIndex += 1;
      }
    }
  }

  return triplets
}
// @lc code=end
