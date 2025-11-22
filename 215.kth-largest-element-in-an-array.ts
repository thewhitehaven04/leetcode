/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  const maxHeap: number[] = Array.from<number>({
    length: nums.length + 1,
  }).fill(Number.NEGATIVE_INFINITY);

  const swap = (i: number, j: number) => {
    const temp = maxHeap[j];
    maxHeap[j] = maxHeap[i];
    maxHeap[i] = temp;
  };

  let count = 0;

  const _getParentIndex = (i: number) => i >>> 1;

  const siftUp = (item: number) => {
    let i = count + 1;
    maxHeap[i] = item;
    let parentIndex = _getParentIndex(i);
    while (maxHeap[parentIndex] < maxHeap[i] && parentIndex > 0) {
      swap(parentIndex, i);

      i = parentIndex;
      parentIndex = _getParentIndex(i);
    }
    count++;
  };

  const getMax = () => {
    return maxHeap.at(1) ?? Number.NEGATIVE_INFINITY;
  };

  const siftDown = () => {
    swap(1, count);
    maxHeap[count] = Number.NEGATIVE_INFINITY;
    let i = 1;

    while (maxHeap[i] < maxHeap[i << 1] || maxHeap[i] < maxHeap[(i << 1) + 1]) {
      const leftIndex = i << 1;
      const rightIndex = leftIndex + 1;
      if (maxHeap[leftIndex] < maxHeap[rightIndex]) {
        swap(rightIndex, i);
        i = rightIndex;
      } else {
        swap(leftIndex, i);
        i = leftIndex;
      }
    }
    count--;
  };

  const heapify = (arr: number[]) => {
    arr.forEach((val) => {
      siftUp(val);
    });
  };

  heapify(nums);
  for (let i = 1; i < k; i++) {
    siftDown();
  }
  return getMax();
}
// @lc code=end
