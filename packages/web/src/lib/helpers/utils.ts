export const randomFromArray = (array: any[]) => {
  if (array.length === 0) return undefined
  if (array.length === 1) return array[0]
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
