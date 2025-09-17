import {useNavigate} from 'react-router-dom'
import type {FC} from "react";
import Button from '../../components/ui/Button'

const Welcome: FC = () => {
  const navigate = useNavigate()

  const goToForm = () => navigate('/form')
  const goToMessages = () => navigate('/messages')

  return (
    <div
      className="flex flex-col items-center justify-center h-screen gap-6 bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-gray-800">Welcome!</h1>
      <div className="flex gap-4">
        <Button variant="secondary" onClick={goToMessages}>
          All Messages
        </Button>
        <Button variant="primary" onClick={goToForm}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Welcome
