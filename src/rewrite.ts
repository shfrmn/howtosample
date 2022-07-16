/**
 *
 */
export function rewriteText(content: string, targetName: string): string {
  let match = content.match(/sample/i)
  while (match) {
    const sample = match[0]
    const position = match.index
    if (typeof position !== 'number') {
      return content
    }
    const isCapitalized = sample[0].toUpperCase() === sample[0]
    const target = isCapitalized
      ? targetName.slice(0, 1).toUpperCase() + targetName.slice(1)
      : targetName.slice(0, 1).toLowerCase() + targetName.slice(1)
    content =
      content.slice(0, position) +
      target +
      content.slice(position + 'sample'.length)
    match = content.match(/sample/i)
  }
  return content
}
