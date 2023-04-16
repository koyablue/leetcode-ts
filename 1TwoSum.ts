const twoSum = (nums: number[], target: number): number[] => {
  // Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // { 7: 0 }
  // if (nums[i] in map) return map[7],i else
  const map: { [key: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      map[target - nums[i]] = i
      continue
    }

    if (nums[i] in map) {
      return [map[nums[i]], i]
    }
    map[target - nums[i]] = i
  }

  return []
}
