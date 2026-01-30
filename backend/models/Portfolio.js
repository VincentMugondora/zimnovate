import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 140 },
    description: { type: String, required: true, trim: true, maxlength: 3000 },
    images: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true, maxlength: 50 }],
    category: { type: String, trim: true, maxlength: 80 },
    date: { type: Date },
  },
  { timestamps: true },
)

portfolioSchema.index({ date: -1 })
portfolioSchema.index({ tags: 1 })

export default mongoose.model('Portfolio', portfolioSchema)
