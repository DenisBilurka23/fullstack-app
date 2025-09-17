import { Router, Request, Response } from 'express'
import prisma from '../prismaClient'

const router = Router()

router.get('/', async (_req: Request, res: Response) => {
  try {
    const messages = await prisma.message.findMany({ orderBy: { createdAt: 'desc' } })
    res.status(200).json(messages)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  const { name, phone, message } = req.body

  if (!name || name.length < 2) return res.status(400).json({ error: 'Name must be at least 2 characters' })
  if (!phone || !/^(?:\+375|80)\d{7,}$/.test(phone)) return res.status(400).json({ error: 'Phone format is invalid' })
  if (!message || message.length < 2) return res.status(400).json({ error: 'Message must be at least 2 characters' })

  try {
    const newMessage = await prisma.message.create({ data: { name, phone, message } })
    res.status(201).json(newMessage)
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' })
  }
})

export default router
