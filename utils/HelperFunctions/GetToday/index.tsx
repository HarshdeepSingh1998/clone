export const isTodayBetween = (startDateStr: string, endDateStr: string) => {
  const today = new Date()
  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  today.setHours(0, 0, 0, 0)
  startDate.setHours(0, 0, 0, 0)
  endDate.setHours(0, 0, 0, 0)

  return today >= startDate && today <= endDate
}
