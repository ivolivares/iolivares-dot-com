import { daysTo } from '@io/lib/dates'

const Types = {
  YOUTUBE: 'youtube',
  TODAY: 'live-today',
  UPCOMING: 'upcoming',
  ENDED: 'ended',
}

const setConfType = (conf) => {
  const { YOUTUBE, UPCOMING, ENDED, TODAY } = Types
  const remainingDays = daysTo(conf.date)

  let type = YOUTUBE

  if (remainingDays === 0 || remainingDays === -1) {
    type = TODAY
  }

  if (remainingDays > 0) {
    type = UPCOMING
  }

  if (remainingDays < -1 && conf.link.indexOf('youtu.be') === -1) {
    type = ENDED
  }

  return {
    type,
    remainingDays,
    ...conf
  }
}

export {
  Types as ConfTypes,
  setConfType,
}
