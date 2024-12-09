import { format, isValid, parseISO } from 'date-fns'

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString)
  return isValid(date) ? format(date, 'MMM d, yyyy') : 'Invalid Date'
}
