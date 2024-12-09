import { UTCDate } from '@date-fns/utc'
import { format, isValid } from 'date-fns'

export const formatDate = (dateString: string): string => {
  const date = new UTCDate(dateString)
  return isValid(date) ? format(date, 'MMM d, yyyy') : 'Invalid Date'
}
