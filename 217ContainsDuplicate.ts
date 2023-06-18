function containsDuplicate(nums: number[]): boolean {
  // need to cache appeared numbers -> new number[]
  // linear search the array and if the value is in the cache, return true

  const cache: {[key: number]: number} = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) return true

    cache[nums[i]] = i
  }

  return false
}