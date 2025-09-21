/*
 * @lc app=leetcode id=1796 lang=typescript
 *
 * [1796] Second Largest Digit in a String
 */

// @lc code=start
function secondHighest(s: string): number {
    let highest = -1 
    let secondHighest = -1

    for (const num of s) {
        const parsed = Number.parseInt(num)
        if (!isNaN(parsed)) {
            if (highest === -1) {
                highest = parsed
            } else {
                if (parsed > secondHighest) {
                    if (parsed > highest) {
                        secondHighest = highest
                        highest = parsed
                    }
                    else if (parsed !== highest) {
                        secondHighest = parsed;
                    }
                }
            }
        }
    }

    return secondHighest
};
// @lc code=end

