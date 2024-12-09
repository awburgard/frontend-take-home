import { describe, expect, it } from 'vitest'

import { formatDate } from '@/utils/formatDate'

describe('formatDate', () => {
  it('should format a valid date string correctly', () => {
    const dateString = '2023-10-15'
    const formattedDate = formatDate(dateString)
    expect(formattedDate).toBe('Oct 15, 2023')
  })

  it('should return "Invalid Date" for an invalid date string', () => {
    const invalidDateString = 'invalid-date'
    const formattedDate = formatDate(invalidDateString)
    expect(formattedDate).toBe('Invalid Date')
  })

  it('should handle different date formats', () => {
    const dateString = '2024-07-29T23:16:10.554Z'
    const formattedDate = formatDate(dateString)
    expect(formattedDate).toBe('Jul 29, 2024')
  })
})
it('should handle current date correctly', () => {
  const currentDate = new Date().toISOString()
  const formattedDate = formatDate(currentDate)
  expect(formattedDate).toMatch(/^[A-Z][a-z]{2} \d{1,2}, \d{4}$/)
})

it('should handle date with time and timezone offset', () => {
  const dateString = '2024-02-15T08:30:45+05:30'
  const formattedDate = formatDate(dateString)
  expect(formattedDate).toBe('Feb 15, 2024')
})

it('should handle date in YYYY/MM/DD format', () => {
  const dateString = '2024/03/21'
  const formattedDate = formatDate(dateString)
  expect(formattedDate).toBe('Mar 21, 2024')
})

it('should handle date with milliseconds', () => {
  const dateString = '2024-04-01T15:30:00.123Z'
  const formattedDate = formatDate(dateString)
  expect(formattedDate).toBe('Apr 1, 2024')
})

it('should handle date at end of month with time', () => {
  const dateString = '2024-12-31T23:59:59Z'
  const formattedDate = formatDate(dateString)
  expect(formattedDate).toBe('Dec 31, 2024')
})
