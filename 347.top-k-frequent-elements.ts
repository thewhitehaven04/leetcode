/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    map.set(num, (map.get(num) ?? 0) + 1);
  });

  const maxHeap = Array.from<[number, number]>({
    length: nums.length + 1,
  }).fill([Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]);

  const swap = (i: number, j: number) => {
    const temp = maxHeap[j];
    maxHeap[j] = maxHeap[i];
    maxHeap[i] = temp;
  };

  let count = 0;

  const _getParentIndex = (i: number) => i >>> 1;

  const siftUp = ([value, priority]: [number, number]) => {
    let i = count + 1;
    maxHeap[i] = [value, priority];
    let parentIndex = _getParentIndex(i);
    while (maxHeap[parentIndex][1] < maxHeap[i][1] && parentIndex > 0) {
      swap(parentIndex, i);

      i = parentIndex;
      parentIndex = _getParentIndex(i);
    }
    count++;
  };

  const getMax = () => {
    return (
      maxHeap.at(1) ?? [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
    );
  };

  const siftDown = () => {
    swap(1, count);
    maxHeap[count] = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    let i = 1;

    while (
      count > 1 &&
      (maxHeap[i][1] < maxHeap[i << 1][1] ||
        maxHeap[i][1] < maxHeap[(i << 1) + 1]?.[1])
    ) {
      const leftIndex = i << 1;
      const rightIndex = leftIndex + 1;
      if (maxHeap[leftIndex][1] < maxHeap[rightIndex][1]) {
        swap(rightIndex, i);
        i = rightIndex;
      } else {
        swap(leftIndex, i);
        i = leftIndex;
      }
    }
    count--;
  };
  map.forEach((priority, value) => {
    siftUp([value, priority]);
  });

  const values = [];
  for (let i = 1; i <= k; i++) {
    values.push(getMax()[0]);
    siftDown();
  }
  return values;
}
// @lc code=end
