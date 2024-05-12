export function capitalizeString(string: string) {
  if (string.length === 0) {
    return string
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
