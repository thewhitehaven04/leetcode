/*
 * @lc app=leetcode id=547 lang=typescript
 *
 * [547] Number of Provinces
 */

// @lc code=start
function findCircleNum(isConnected: number[][]): number {
  const adjacencyList = isConnected.map((row) => {
    const items: number[] = [];

    row.forEach((item, rowIndex) => {
      if (item === 1) {
        items.push(rowIndex);
      }
    });
    return items;
  });

  const stack: number[] = [];

  const push = (item: number) => stack.push(item);
  const pop = () => stack.pop();
  const isEmpty = () => stack.length === 0;

  let componentCount = 0;
  for (let i = 0; i < adjacencyList.length; i++) {
    const list = adjacencyList[i];

    if (list.length > 0) {
      componentCount++;
    }

    adjacencyList[i].forEach((item) => {
      if (item !== i) {
        push(item);
      }
    });

    do {
      const adjacentSetIndex = pop();
      if (adjacentSetIndex) {
        while (adjacencyList[adjacentSetIndex].length > 0) {
          const adjacentItem = adjacencyList[adjacentSetIndex].shift();
          if (adjacentItem && adjacentItem !== i) {
            push(adjacentItem);
          }
        }
      }
    } while (!isEmpty());
  }

  return componentCount;
}
// @lc code=end
