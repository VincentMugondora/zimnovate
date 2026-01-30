import Portfolio from '../models/Portfolio.js'

export const listPortfolio = async (req, res) => {
  const items = await Portfolio.find({})
    .sort({ date: -1, createdAt: -1 })
    .limit(100)
    .select('title description images tags category date')

  res.json({ items })
}
