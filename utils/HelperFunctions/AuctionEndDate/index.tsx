import moment from 'moment'

export const endDate = (endDate: string) => {
  const auctionEndDate = moment(endDate)
  const currentDate = moment()
  const timeRemaining = moment.duration(auctionEndDate.diff(currentDate))
  const daysRemaining = Math.floor(timeRemaining.asDays())
  const hoursRemaining = Math.floor(timeRemaining.asHours())
  const minutesRemaining = timeRemaining.minutes()

  if (daysRemaining > 0) {
    return `${daysRemaining} day${daysRemaining > 1 ? 's' : ''}`
  } else {
    const paddedMinutes =
      minutesRemaining < 10 ? `0${minutesRemaining}` : `${minutesRemaining}`
    return `${hoursRemaining}:${paddedMinutes} Min`
  }
}
