const intersection = (nums1: number[], nums2: number[]): number[] => {
  const dup: number[] = []
  const res: number[] = []

  for (let n1 of nums1) {
    if (nums2.includes(n1)) {
      dup.push(n1)
    }
  }

  for (let d of dup) {
    if (!res.includes(d)) {
      res.push(d)
    }
  }

  return res
}
