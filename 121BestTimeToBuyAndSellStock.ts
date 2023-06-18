function maxProfit(prices: number[]): number {
  let maxProfit = 0

  // use 2 pointer
  // linear search with 2 pointers left, right.
  // if prices[left] < prices[right] -> profitable. compare with maxProfit
  // if profitable point is found, update only right pointer
  // if prices[left] > prices[right], update left = right,because it's the current lowest point

  let left = 0
  let right = 1

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]
      if (maxProfit < profit) {
        maxProfit = profit
        right++
        continue
      }
    } else {
      left = right
    }

    right++
  }

  return maxProfit
}