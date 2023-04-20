const firstUniqChar = (s: string): number => {
  if (s.length === 1) return 0

  const map: { [key: string]: number } = {}

  for (let letter of s) {
    if (letter in map) {
      map[letter] += 1
      continue
    }
    map[letter] = 1
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i
  }

  return -1
}