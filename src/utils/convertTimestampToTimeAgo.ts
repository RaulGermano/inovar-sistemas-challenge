import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const convertTimestampToTimeAgo = (timestamp: string) => {
  TimeAgo.addLocale(en)

  const timeAgo = new TimeAgo('en-US')
  const date = new Date(parseInt(timestamp) * 1000)

  return timeAgo.format(date)
}

export default convertTimestampToTimeAgo
