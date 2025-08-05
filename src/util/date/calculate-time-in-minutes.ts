export const calculateTimeInMinutes = (date: string) => {
  const diffTime = Math.abs(new Date().getTime() - new Date(date).getTime())
  return Math.floor(diffTime / (1000 * 60))
}
