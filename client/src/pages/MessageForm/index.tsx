import {useForm, type SubmitHandler} from 'react-hook-form'
import { type FC, useState } from "react";
import { sendMessage} from "../../api/messages.ts";
import type {MessageFormData, FormData} from "../../types";
import Input from '../../components/form/Input'
import Textarea from '../../components/form/Textarea'
import Button from '../../components/ui/Button'
import Toast from '../../components/ui/Toast'
import Loader from '../../components/ui/Loader'

const MessageForm: FC = () => {
  const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<FormData>()
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmitForm: SubmitHandler<MessageFormData> = async (data) => {
    try {
      await sendMessage(data)
      reset()
      setShowSuccess(true)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      setErrorMessage(message)
      console.error(message)
    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-pink-50">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg flex flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Send a Message</h2>

          <Input<FormData>
            name="name"
            placeholder="Name"
            register={register}
            rules={{ required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } }}
            error={errors.name}
          />

          <Input<FormData>
            name="phone"
            placeholder="Phone"
            register={register}
            rules={{ required: 'Phone is required', pattern: { value: /^(?:\+375|80)\d{7,}$/, message: 'Phone format is incorrect' } }}
            error={errors.phone}
          />

          <Textarea<FormData>
            name="message"
            placeholder="Message"
            register={register}
            rules={{ required: 'Message is required', minLength: { value: 2, message: 'Message is too short' } }}
            error={errors.message}
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>

      {isSubmitting && <Loader />}

      <Toast
        open={showSuccess}
        message="Message sent. We’ve received your message."
        onClose={() => setShowSuccess(false)}
      />

      <Toast
        open={!!errorMessage}
        message={errorMessage || ''}
        onClose={() => setErrorMessage(null)}
        variant="error"
      />
    </>
  )
}

export default MessageForm
