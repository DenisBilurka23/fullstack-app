import express from 'express'
import cors from 'cors'
import messagesRouter from './routes/messages'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
