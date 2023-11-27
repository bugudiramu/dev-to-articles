export default function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  const mid: number = Math.floor(nums.length / 2);
  const left: number[] = nums.slice(0, mid);
  const right: number[] = nums.slice(mid);

  const sortedLeft: number[] = mergeSort(left);
  const sortedRight: number[] = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(nums1: number[], nums2: number[]): number[] {
  let [leftIdx, rightIdx]: [number, number] = [0, 0];
  const result: number[] = [];
  while (leftIdx < nums1.length && rightIdx < nums2.length) {
    if (nums1[leftIdx] < nums2[rightIdx]) {
      result.push(nums1[leftIdx]);
      leftIdx++;
    } else {
      result.push(nums2[rightIdx]);
      rightIdx++;
    }
  }
  /*
   * After the loop, one of the arrays might still have elements remaining.
   * You can append the remaining elements directly without additional checks.
   */
  return result.concat(nums1.slice(leftIdx), nums2.slice(rightIdx));
}

const nums: number[] = [2, 41, 4, 1, 7];
console.log(mergeSort(nums.slice())); // 🔄 Using slice to avoid modifying the original array
