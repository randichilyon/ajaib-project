import format from 'date-fns-tz/format'
import parse from 'date-fns/parse'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'
import { id } from 'date-fns/locale'

export function formatDate ({
  value,
  targetFormat = 'dd-MM-yyyy HH:mm',
  config = { timeZone: null, locale: id }
}) {
  const options = {
    ...config
  }
  if (options.timeZone) {
    const date = typeof value === 'number' ? new Date(value) : parse(value, 'yyyy-MM-dd', new Date())
    return format(utcToZonedTime(date, options.timeZone), targetFormat, options)
  }
  if (typeof value === 'number') {
    return format(value, targetFormat, options)
  }
  return format(new Date(value),
    targetFormat,
    options)
}
