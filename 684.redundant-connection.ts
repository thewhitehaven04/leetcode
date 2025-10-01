/*
 * @lc app=leetcode id=684 lang=typescript
 *
 * [684] Redundant Connection
 */

// @lc code=start

const DSU = (length: number) => {
  const arr = Array.from({ length }).map((_, index) => index + 1);

  const get = (i: number) => {
    return arr[i - 1];
  };

  const set = (i: number, val: number) => {
    arr[i - 1] = val;
  };

  const find = (i: number) => {
    const val_i = get(i);
    if (val_i !== i) {
      return find(val_i);
    }
    return val_i;
  };

  const union = (i: number, j: number) => {
    const val_i = find(i);
    const val_j = find(j);
    set(val_j, val_i);
  };

  const getComponentCount = () => {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
      set.add(find(i + 1));
    }
    return set.size;
  };

  return {
    get,
    set,
    find,
    union,
    getComponentCount,
  };
};

function findRedundantConnection(edges: number[][]): number[] {
  for (let i = edges.length - 1; i >= 0; i--) {
    const candidateGraph = [...edges.slice(0, i), ...edges.slice(i + 1)];
    const dsu = DSU(edges.length);
    let k = 0;
    while (k < candidateGraph.length) {
      const start = candidateGraph[k][0];
      const end = candidateGraph[k][1];
      if (dsu.find(start) !== dsu.find(end)) {
        dsu.union(start, end);
      }
      k++;
    }

    if (dsu.getComponentCount() === 1) {
      return edges[i];
    }
  }
  return edges[0];
}
// @lc code=end
