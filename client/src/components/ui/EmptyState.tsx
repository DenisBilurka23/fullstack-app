import type {FC, ReactNode} from 'react'

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: ReactNode
  className?: string
}

const DefaultIcon = () => (
  <svg
    className="h-10 w-10 text-gray-300"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7 4h10a2 2 0 0 1 2 2v13l-5-3-5 3V6a2 2 0 0 1 2-2z" />
  </svg>
)

const EmptyState: FC<EmptyStateProps> = ({title = 'Nothing here yet', description, icon, className = ''}) => {
  return (
    <div className={['flex flex-col items-center justify-center text-center text-gray-500', className].join(' ')}>
      <div className="mb-2">{icon ?? <DefaultIcon />}</div>
      <p className="text-base">{title}</p>
      {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
    </div>
  )
}

export default EmptyState
