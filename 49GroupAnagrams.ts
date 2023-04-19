const groupAnagrams = (strs: string[]): string[][] => {
  // { '0,1,0...': ['tea', 'eat'...], [...], ... }
  const map: { [key: string]: string[] } = {}

  for (let s of strs) {
    // [0, 0, 0, ...] 26 0s
    const charFreq = [...Array(26)].map(() => 0)

    for (let i = 0; i < s.length; i++) {
      charFreq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    const keyStr = charFreq.toString()
    if (!(keyStr in map)) {
      map[keyStr] = []
    }
    map[keyStr].push(s)
  }

  return Object.values(map)
}