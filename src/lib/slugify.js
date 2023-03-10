export const slugify = (string) => {
  return string.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
}
