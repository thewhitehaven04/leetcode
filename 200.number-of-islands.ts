/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
class DisjointSet {
  value: string;
  parent: DisjointSet;

  constructor(value: string) {
    this.value = value;
    this.parent = this;
  }

  find = (): DisjointSet => {
    if (this.parent !== this) {
      return this.parent.find();
    }
    return this;
  };

  union = (y: DisjointSet) => {
    const yParent = y.find();
    const thisParent = this.find();
    thisParent.parent = yParent.parent;
  };
}

function numIslands(grid: string[][]): number {
  let count = 0;

  const traversalQueue: [number, number][] = [];

  const isEmpty = () => traversalQueue.length === 0;

  const dequeue = () => {
    const val = traversalQueue.shift();
    return val;
  };

  const enqueue = (pair: [number, number]) => {
    return traversalQueue.push(pair);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        enqueue([i, j]);
        count++;

        while (!isEmpty()) {
          const entry = dequeue();
          if (entry) {
            const i = entry[0];
            const j = entry[1];
            if (i - 1 >= 0 && grid[i - 1][j] === "1") {
              enqueue([i - 1, j]);
              grid[i - 1][j] = "0";
            }
            if (j - 1 >= 0 && grid[i][j - 1] === "1") {
              enqueue([i, j - 1]);
              grid[i][j - 1] = "0";
            }
            if (i + 1 < grid.length && grid[i + 1][j] === "1") {
              enqueue([i + 1, j]);
              grid[i + 1][j] = "0";
            }
            if (j + 1 < grid[i].length && grid[i][j + 1] === "1") {
              enqueue([i, j + 1]);
              grid[i][j + 1] = "0";
            }
          }
          grid[i][j] = "0";
        }
      }
    }
  }

  return count;
}
// @lc code=end
