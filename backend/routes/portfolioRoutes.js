import express from 'express'
import { listPortfolio } from '../controllers/portfolioController.js'

const router = express.Router()

router.get('/', listPortfolio)

export default router
