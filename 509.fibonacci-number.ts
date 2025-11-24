/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
  const memo = Array.from<number>({ length: n }).fill(0);
  memo[0] = 0
  memo[1] = 1

  if (n === 0 || n === 1) {
    return memo[n];
  }

  for (let i = 2; i < n; i++) {
    memo[i] = (memo[i - 1]) + (memo[i - 2]);
  }

  return (memo[n - 1]) + (memo[n - 2]);
}
// @lc code=end
