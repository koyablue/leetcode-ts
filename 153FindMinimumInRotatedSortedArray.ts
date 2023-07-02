function findMin(nums: number[]): number {
  let res = nums[0]
  let leftIdx = 0
  let rightIdx = nums.length - 1

  while (leftIdx <= rightIdx) {
    if (nums[leftIdx] < nums[rightIdx]) {
      res = Math.min(res, nums[leftIdx])
      break
    }

    let middleIdx = Math.round((leftIdx + rightIdx) / 2)
    res = Math.min(res, nums[middleIdx])

    if (nums[middleIdx] >= nums[leftIdx]) {
      leftIdx = middleIdx + 1
    } else {
      rightIdx = middleIdx - 1
    }
  }

  return res
}
