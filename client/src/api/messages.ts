import axios, {AxiosError} from 'axios'
import {api} from "./index.ts";
import type {Message, MessageFormData} from "../types";

export const sendMessage = async (data: MessageFormData): Promise<Message> => {
  try {
    const response = await api.post<Message>('/messages', data)
    return response.data
  } catch (err) {
    // TS18046: Error is of type unknown
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<{ error: string }>
      throw new Error(axiosError.response?.data?.error || 'Network error')
    }
    throw new Error('Unknown error')
  }
}

// Получение всех сообщений
export const getAllMessages = async (): Promise<Message[]> => {
  try {
    const response = await api.get<Message[]>('/messages')
    return response.data
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<{ error: string }>
      throw new Error(axiosError.response?.data?.error || 'Network error')
    }
    throw new Error('Unknown error')
  }
}

export default api
