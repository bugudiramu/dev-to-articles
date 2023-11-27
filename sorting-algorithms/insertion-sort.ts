export function insertionSort(nums: number[]): number[] {
  const length: number = nums.length;

  for (let row: number = 1; row < length; row++) {
    const currentElement: number = nums[row];

    let col: number = row - 1;

    while (col >= 0 && nums[col] > currentElement) {
      nums[col + 1] = nums[col];
      col--;
    }

    nums[col + 1] = currentElement;
  }
  return nums;
}

const nums: number[] = [2, 41, 4, 1, 7];
console.log(insertionSort(nums.slice())); // 🔄 Using slice to avoid modifying the original array
