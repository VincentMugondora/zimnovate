import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './utils/db.js'
import { applySecurityMiddleware } from './middleware/securityMiddleware.js'
import contactRoutes from './routes/contactRoutes.js'
import portfolioRoutes from './routes/portfolioRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

app.set('trust proxy', 1)

app.use(express.json({ limit: '50kb' }))

applySecurityMiddleware(app)

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.use('/api/contact', contactRoutes)
app.use('/api/portfolio', portfolioRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
  await connectDb(process.env.MONGODB_URI)
  app.listen(port, () => {
    console.log(`Zimnovate API listening on port ${port}`)
  })
}

start()
