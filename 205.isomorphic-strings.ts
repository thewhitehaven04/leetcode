/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    const map = new Map<string, string>()
    const inverseMap = new Map<string, string>()

    for (let i = 0; i<s.length; i++) {
        const sChar = s[i]
        const tChar = t[i]
        const mapping = map.get(sChar)

        if (mapping === undefined) {
            map.set(sChar, tChar)
        } else if (mapping !== tChar) {
            return false
        }

        const inverse = inverseMap.get(tChar)
        if (inverse === undefined) {
            inverseMap.set(tChar, sChar)
        } else if (inverse !== sChar) {
            return false
        }
    }

    return true
};
// @lc code=end

