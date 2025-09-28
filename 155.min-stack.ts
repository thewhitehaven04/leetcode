/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  minStack: number[];
  arr: number[];

  constructor() {
    this.minStack = [];
    this.arr = [];
  }

  push(val: number): void {
    const min = this.getMin() ?? Number.MAX_SAFE_INTEGER
    if (min >= val) {
      this.minStack.push(val);
    }
    this.arr.push(val);
  }

  pop(): void {
    const val = this.arr.pop();
    if (val === this.getMin()) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
