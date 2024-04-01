export function splitClasses(title: string, item?: string) {
  if (!item) return ""
  const items = item.split("-")
  return items.map((item) => `is-${title}-${item}`).join(" ")
}
