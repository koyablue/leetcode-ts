// https://www.youtube.com/watch?v=r1cwGocurtA
// https://leetcode.com/problems/subarray-sum-equals-k/solutions/1759711/python-simple-python-solution-using-prefixsum-and-dictionary/
function subarraySum(nums: number[], k: number): number {
  let count = 0
  let sum = 0
  const prefSums: { [key: number]: number } = { 0: 1 }

  for (let n of nums) {
    sum += n
    if (sum - k in prefSums) {
      count += prefSums[sum - k]
    }

    sum in prefSums
      ? prefSums[sum] += 1
      : prefSums[sum] = 1
  }

  return count
}
