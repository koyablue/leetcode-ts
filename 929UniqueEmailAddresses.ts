const numUniqueEmails = (emails: string[]): number => {
  const unique: Set<string> = new Set()

  for (let email of emails) {
    let local, domain
    [local, domain] = email.split('@')
    local = local.split('+')[0].replaceAll('.', '')
    unique.add(`${local}@${domain}`)
  }

  return unique.size
}
