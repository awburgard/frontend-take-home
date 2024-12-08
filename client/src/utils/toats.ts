import { toast, type ToastOptions } from 'react-toastify'

const DEFAULT_POSITION = 'bottom-right'

export const toastError = ({
  message,
  ...props
}: { message: string } & ToastOptions) => {
  toast.error(message, {
    position: DEFAULT_POSITION,
    ...props,
  })
}

export const toastSuccess = ({
  message,
  ...props
}: { message: string } & ToastOptions) => {
  toast.success(message, {
    position: DEFAULT_POSITION,
    ...props,
  })
}
