export default function binarySearch(nums: number[], target: number): number {
  if (nums.length === 0) return -1;

  let left: number = 0;
  let right: number = nums.length - 1;

  const isAscending: boolean = nums[left] < nums[right];

  while (left <= right) {
    const mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (isAscending) {
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

const nums: number[] = [1, 2, 3, 4, 5];
const target: number = 2;
binarySearch(nums.slice(), target); // 🔄 Using slice to avoid modifying the original array
