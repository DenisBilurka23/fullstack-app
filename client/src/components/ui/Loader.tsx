import type {HTMLAttributes} from 'react'

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const Loader = ({className = '', size = 48, ...props}: LoaderProps) => {
  return (
    <div
      className={['fixed bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none', className].join(' ')}
      aria-hidden="true"
      {...props}
    >
      <div className="pointer-events-none rounded-2xl bg-black/80 text-white shadow-2xl backdrop-blur px-5 py-4">
        <svg
          className="animate-spin text-white drop-shadow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
        >
          <circle className="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  )
}

export default Loader
