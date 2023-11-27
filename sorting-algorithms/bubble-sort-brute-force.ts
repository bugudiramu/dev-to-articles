export default function bubbleSortBruteForce(nums: number[]): number[] {
  const length: number = nums.length;

  for (let row: number = 0; row < length - 1; row++) {
    for (let col: number = 0; col < length - row - 1; col++) {
      if (nums[col] > nums[col + 1]) {
        [nums[col], nums[col + 1]] = [nums[col + 1], nums[col]];
      }
    }
  }

  return nums;
}

const nums: number[] = [2, 41, 4, 1, 7];
bubbleSortBruteForce(nums.slice()); // 🔄 Using slice to avoid modifying the original array
