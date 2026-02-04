export function Profile(userSummary: string): string {
  return `
  #v(0.4em)
  #paragraph("${userSummary.trim()}")
#v(1em)
`;
}

