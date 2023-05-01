// https://www.youtube.com/watch?v=Us6LBYBVko4
// https://www.youtube.com/watch?v=iJGr1OtmH0c

function maxAreaOfIsland(grid: number[][]): number {
  // const seen: boolean[][] = [[false]]
  const seen: boolean[][] = []

  let maxArea = 0
  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < rows; i++) {
    seen.push(Array.from({length: columns}, () => false))
  }

  function area(row: number, column: number, grid: number[][]): number {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[row].length || seen[row][column] || (grid[row][column] === 0)) {
      return 0
    }

    seen[row][column] = true
    return (1 + area(row + 1, column, grid) + area(row - 1, column, grid) + area(row, column - 1, grid) + area(row, column + 1, grid))
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // maxArea = Math.max(maxArea , area(i, j, grid))
      const areaRes = area(i, j, grid)
      maxArea = maxArea >= areaRes ? maxArea : areaRes
    }
  }

console.log(seen)
  return maxArea
};
