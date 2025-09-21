/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    function rotate(matrix: number[][]): void {
    for (let i=0; i<matrix.length/2; i++) {
        const temp = [...matrix[i]]
        matrix[i] = matrix[matrix.length-i-1]
        matrix[matrix.length-i-1] = temp
    }

    for (let i=0; i<matrix.length; i++) {
        for (let j=i; j<matrix[i].length; j++) {
            const temp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp
        }
    }
};
};
// @lc code=end

