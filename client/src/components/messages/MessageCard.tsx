import type {FC} from 'react'
import type {Message} from '../../types'

interface MessageCardProps {
  message: Message
  className?: string
}

const MessageCard: FC<MessageCardProps> = ({message, className = ''}) => {
  const createdAt = new Date(message.createdAt)
  return (
    <div className={['bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition', className].join(' ')}>
      <p className="font-semibold text-lg">{message.name}</p>
      <p className="text-gray-500 text-sm mb-2">{message.phone}</p>
      <p className="text-gray-700 mb-2">{message.message}</p>
      <p className="text-gray-400 text-xs">{createdAt.toLocaleString()}</p>
    </div>
  )
}

export default MessageCard
