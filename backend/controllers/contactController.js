import Contact from '../models/Contact.js'

export const createContact = async (req, res) => {
  const { name, business, email, phone, projectType, budgetRange, message } = req.body

  const doc = await Contact.create({
    name,
    business,
    email,
    phone,
    projectType,
    budgetRange,
    message,
  })

  res.status(201).json({
    message: 'Contact submission received',
    id: doc._id,
  })
}
