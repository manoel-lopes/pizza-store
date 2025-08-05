export const calculateTimeInMinutes = (date: string) => {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - new Date(date).getTime())
  const diffMinutes = Math.floor(diffTime / (1000 * 60))
  return diffMinutes
}
