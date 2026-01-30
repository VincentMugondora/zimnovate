import express from 'express'
import { body } from 'express-validator'
import { createContact } from '../controllers/contactController.js'
import { contactRateLimit } from '../middleware/securityMiddleware.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = express.Router()

router.post(
  '/',
  contactRateLimit,
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 120 }),
    body('business').optional().trim().isLength({ max: 160 }),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail().isLength({ max: 200 }),
    body('phone').trim().notEmpty().withMessage('Phone is required').isLength({ max: 40 }),
    body('projectType').optional().trim().isLength({ max: 80 }),
    body('budgetRange').optional().trim().isLength({ max: 80 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 3000 }),
  ],
  validateRequest,
  asyncHandler(createContact),
)

export default router
