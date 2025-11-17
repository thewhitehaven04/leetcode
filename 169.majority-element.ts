/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const threshold = Math.ceil(nums.length / 2)
    const map = new Map<number, number>()
    const set = new Set()

    for (const num of nums) {
        const val = map.get(num)
        map.set(num, (val ?? 0)+1)

        if (val && val+1 >= threshold) {
            return num 
        }
    }
    return nums[0]
};
// @lc code=end

