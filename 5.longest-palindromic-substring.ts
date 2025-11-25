/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let odd = Array.from<boolean>({ length: s.length }).fill(true);
  let even = Array.from<boolean>({ length: s.length - 1 }).fill(false);
  let maxSubstrIndices = [0, 0];

  for (let k = 0; k < s.length - 1; k++) {
    if (s.charCodeAt(k) === s.charCodeAt(k + 1)) {
      even[k] = true;
      maxSubstrIndices = [k, k + 1];
    }
  }

  for (let i = 2; i < s.length; i++) {
    const previousMemoizedRow = i % 2 === 0 ? even : odd;
    const arr = Array.from<boolean>({
      length: previousMemoizedRow.length - 2,
    }).fill(false);
    for (let k = 1; k < previousMemoizedRow.length - 1; k++) {
      if (previousMemoizedRow[k]) {
        if (s.charCodeAt(k - 1) === s.charCodeAt(k + i - 1)) {
          arr[k - 1] = true;
          maxSubstrIndices = [k - 1, i + k - 1];
        }
      }
    }

    if (i % 2 === 0) {
        even = arr
    } else {
        odd = arr 
    }
  }

  return s.substring(maxSubstrIndices[0], maxSubstrIndices[1] + 1);
}
// @lc code=end
