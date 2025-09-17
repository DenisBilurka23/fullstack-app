export interface Message {
  id: number
  name: string
  phone: string
  message: string
  createdAt: string
}

export interface MessageFormData {
  name: string
  phone: string
  message: string
}

export interface FormData {
  name: string
  phone: string
  message: string
}