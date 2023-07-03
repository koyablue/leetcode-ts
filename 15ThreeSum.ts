function threeSum(nums: number[]): number[][] {
  const res: number[][] = []

  nums.sort((a, b) => (a > b ? 1 : -1))

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r]
      if (threeSum > 0) {
        r--
      } else if (threeSum < 0) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]])
        l++
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  return res
}