import moment from 'moment'

export const getDaysRemaining = (time: string) => {
  const timestampInMilliseconds = moment(time).valueOf()
  return moment(timestampInMilliseconds).fromNow()
}
