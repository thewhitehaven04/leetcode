/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sCounts = new Map<string, number>();
  const tCounts = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    sCounts.set(s[i], (sCounts.get(s[i]) ?? 0) + 1);
    tCounts.set(t[i], (tCounts.get(t[i]) ?? 0) + 1);
  }
  for (const [char, sCount] of sCounts.entries()) {
    const tCount = tCounts.get(char);
    if (tCount !== sCount) {
      return false;
    }
  }
  for (const [char, tCount] of tCounts.entries()) {
    const sCount = sCounts.get(char);
    if (sCount !== tCount) {
      return false;
    }
  }

  return true;
}
// @lc code=end
