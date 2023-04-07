const isValid = (s: string): boolean => {
  const closeToOpen = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    // check if s[i] is closing parentheses
    if (s[i] in closeToOpen) {
      // if stack isn't empty and the last element is corresponding opening parentheses
      if (stack && stack[stack.length - 1] === closeToOpen[s[i]]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      // if the letter is opening parentheses
      stack.push(s[i])
    }
  }

  return stack.length === 0
}

// OR

const otherSolution = (s: string): boolean => {
  const closeToOpen = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    // if s[i] is an opening parentheses
    if (s[i] in closeToOpen) {
      stack.push(s[i])
      continue
    }

    // if closing parentheses
    if (stack.length === 0 || closeToOpen[stack.pop() as string] !== s[i]) {
      return false
    }
  }

  return stack.length === 0
}
