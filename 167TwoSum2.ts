function twoSum(numbers: number[], target: number): number[] {
  let leftIdx = 0
  let rightIdx = numbers.length - 1

  while (leftIdx < rightIdx) {
    const currentSum = numbers[leftIdx] + numbers[rightIdx]

    if (currentSum > target) {
      rightIdx--
    } else if (currentSum < target) {
      leftIdx++
    } else {
      return [leftIdx + 1, rightIdx + 1]
    }
  }

  return [-1, -1]
}
