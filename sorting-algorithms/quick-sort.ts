export default function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot: number = nums[0];

  const left: number[] = [];
  const right: number[] = [];

  for (const num of nums.slice(1)) {
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const nums: number[] = [2, 41, 4, 1, 7];
console.log(quickSort(nums.slice())); // 🔄 Using slice to avoid modifying the original array
