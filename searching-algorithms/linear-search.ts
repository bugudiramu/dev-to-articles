export default function linearSearch(nums: number[], target: number): number {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}

const nums: number[] = [2, 41, 4, 1, 7];
const target: number = 3;
linearSearch(nums.slice(), target); // 🔄 Using slice to avoid modifying the original array
