import express from 'express'
import { listPortfolio } from '../controllers/portfolioController.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = express.Router()

router.get('/', asyncHandler(listPortfolio))

export default router
