import {forwardRef, type ButtonHTMLAttributes} from 'react'

type Variant = 'primary' | 'secondary' | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  isLoading?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variant = 'primary', isLoading = false, disabled, className = '', children, ...props},
  ref
) {
  const isDisabled = disabled || isLoading
  return (
    <button
      ref={ref}
      disabled={isDisabled}
      className={[
        'cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl shadow-lg transition font-semibold',
        'disabled:cursor-not-allowed disabled:opacity-70',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {isLoading && (
        <svg
          className="h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      <span>{children}</span>
    </button>
  )
})

export default Button
