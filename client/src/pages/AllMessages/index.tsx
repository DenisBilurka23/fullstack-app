import {type FC, useEffect, useState} from 'react'
import {getAllMessages} from "../../api/messages.ts";
import type {Message} from "../../types";
import EmptyState from '../../components/ui/EmptyState'
import MessageCard from '../../components/messages/MessageCard'

const AllMessages: FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const fetchMessages = async () => {
    try {
      const data = await getAllMessages()
      setMessages(data)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('Unknown error')
      }
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Messages</h2>
      {messages.length === 0 ? (
        <EmptyState title="No messages yet" />
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.map((msg) => (
            <li key={msg.id}>
              <MessageCard message={msg} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AllMessages
