function maxProduct(nums: number[]): number {
  let res = nums[0]
  let curMax = 1
  let curMin = 1

  for (let i = 0; i < nums.length; i++) {
    let tmpCurMax = curMax * nums[i]
    curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
    curMin = Math.min(tmpCurMax, curMin * nums[i], nums[i])

    res = Math.max(res, curMax)
  }

  return res
}
