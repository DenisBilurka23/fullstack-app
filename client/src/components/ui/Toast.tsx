import { useEffect } from 'react'

export type ToastVariant = 'success' | 'error' | 'info'

interface ToastProps {
  open: boolean
  message: string
  onClose?: () => void
  duration?: number
  variant?: ToastVariant
}

const variantClasses: Record<ToastVariant, string> = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
  info: 'bg-blue-600 text-white',
}

const Toast = ({
  open,
  message,
  onClose,
  duration = 2800,
  variant = 'success',
}: ToastProps) =>  {
  useEffect(() => {
    if (!open || !duration) return
    const t = setTimeout(() => onClose?.(), duration)
    return () => clearTimeout(t)
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div className="fixed top-6 right-6 z-50" role="status" aria-live="polite">
      <div className={`flex items-center gap-3 rounded-2xl shadow-2xl px-5 py-4 ${variantClasses[variant]}`}>
        <svg
          className="h-6 w-6 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          {variant === 'success' && (
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          )}
          {variant !== 'success' && (
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.25 7a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0V7z"
              clipRule="evenodd"
            />
          )}
        </svg>
        <div className="flex flex-col">
          <span className="font-semibold">{message}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 rounded-lg px-2 py-1 text-white/90 hover:bg-white/10 transition"
          aria-label="Close"
          title="Close"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default Toast