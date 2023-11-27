export function selectionSort(nums: number[]): number[] {
  const length: number = nums.length;

  for (let row: number = 0; row < length - 1; row++) {
    let minIdx: number = row;
    for (let col: number = row + 1; col < length; col++) {
      if (nums[col] < nums[minIdx]) {
        minIdx = col;
      }
    }
    if (minIdx !== row) {
      [nums[row], nums[minIdx]] = [nums[minIdx], nums[row]];
    }
  }

  return nums;
}

const nums: number[] = [2, 41, 4, 1, 7];
console.log(selectionSort(nums.slice())); // Using slice to avoid modifying the original array
