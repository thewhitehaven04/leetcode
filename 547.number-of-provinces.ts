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

  const queue: number[] = [];

  const enqueue = (item: number) => queue.push(item);
  const dequeue = () => queue.shift();
  const isEmpty = () => queue.length === 0;

  let componentCount = 0;
  for (let i = 0; i < adjacencyList.length; i++) {
    const list = adjacencyList[i];

    if (list.length > 0) {
      componentCount++;
    }

    adjacencyList[i].forEach((item) => {
      if (item !== i) {
        enqueue(item);
      }
    });

    do {
      const adjacentSetIndex = dequeue();
      if (adjacentSetIndex) {
        while (adjacencyList[adjacentSetIndex].length > 0) {
          const adjacentItem = adjacencyList[adjacentSetIndex].shift();
          if (adjacentItem && adjacentItem !== i) {
            enqueue(adjacentItem);
          }
        }
      }
    } while (!isEmpty());
  }

  return componentCount;
}
// @lc code=end
