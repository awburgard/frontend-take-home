import { toast } from 'react-toastify'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { toastError, toastSuccess } from '@/utils/toats'

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}))

describe('Toast utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('toastError', () => {
    it('should call toast.error with correct default parameters', () => {
      const message = 'Error message'
      toastError({ message })

      expect(toast.error).toHaveBeenCalledWith(message, {
        position: 'bottom-right',
      })
    })

    it('should merge additional props with defaults', () => {
      const message = 'Error message'
      const additionalProps = {
        autoClose: 3000,
        hideProgressBar: true,
      }

      toastError({ message, ...additionalProps })

      expect(toast.error).toHaveBeenCalledWith(message, {
        position: 'bottom-right',
        ...additionalProps,
      })
    })
  })

  describe('toastSuccess', () => {
    it('should call toast.success with correct default parameters', () => {
      const message = 'Success message'
      toastSuccess({ message })

      expect(toast.success).toHaveBeenCalledWith(message, {
        position: 'bottom-right',
      })
    })

    it('should merge additional props with defaults', () => {
      const message = 'Success message'
      const additionalProps = {
        autoClose: 3000,
        hideProgressBar: true,
      }

      toastSuccess({ message, ...additionalProps })

      expect(toast.success).toHaveBeenCalledWith(message, {
        position: 'bottom-right',
        ...additionalProps,
      })
    })
  })
})
