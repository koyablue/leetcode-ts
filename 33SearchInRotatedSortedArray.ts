function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  // [4,5,6,7,0,1,2]
  // 0
  while (l <= r) {
    let mid = Math.round((l + r) / 2)

    if (target === nums[mid]) return mid

    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }

  return -1
};