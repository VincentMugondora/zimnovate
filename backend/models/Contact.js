import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    business: { type: String, trim: true, maxlength: 160 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    projectType: { type: String, trim: true, maxlength: 80 },
    budgetRange: { type: String, trim: true, maxlength: 80 },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
  },
  { timestamps: true },
)

contactSchema.index({ createdAt: -1 })

export default mongoose.model('Contact', contactSchema)
