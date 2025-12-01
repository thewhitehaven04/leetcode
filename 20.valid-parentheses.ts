/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];

  const peek = () => {
    return stack.at(-1);
  };

  const openings = ["{", "(", "["];

  const push = (token: string) => {
    stack.push(token);
  };

  const pop = () => {
    stack.pop();
  };

  const isLastTokenMatching = (newToken: string) => {
    const item = peek();
    return (
      (newToken === ")" && item === "(") ||
      (newToken === "}" && item === "{") ||
      (newToken === "]" && item === "[")
    );
  };

  for (const token of s) {
    if (openings.includes(token)) {
      push(token);
    } else if (isLastTokenMatching(token)) {
      pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
// @lc code=end
