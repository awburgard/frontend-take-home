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
