const firstUniqChar = (s: string): number => {
  if (s.length === 1) return 1

  // const map: { [key: number]: number } = {}

  // for (let i = 0; i < s.length; i++) {
  //   if (!(i in map)) {
  //     map[i] = 1
  //     continue
  //   }
  //   map[i] += 1
  // }

  // for (const prop in map) {
  //   if (map[prop] === 1) {
  //     return prop as unknown as number
  //   }
  // }

  // return -1
}
