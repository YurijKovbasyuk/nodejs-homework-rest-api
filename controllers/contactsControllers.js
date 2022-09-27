const { Contact } = require('../models')

const listContacts = async (req, res) => {
  try {
    const { _id } = req.user
    const { page = 1, limit = 10 } = req.query
    const skip = (page - 1) * limit
    const allContacts = await Contact.find({ owner: _id }, "", { skip, limit: Number(limit) }).populate("owner", "name email")
    if (allContacts.length !== 0) {
      return res.status(200).json(allContacts)
    }
    return res.null
  } catch (error) {
    console.error('ERROR listContacts:', error.message)
  }
}

const getContactById = async (req, res) => {
  try {
    const { id } = req.params
    const contact = await Contact.findById(id) // findOne({_id;id})
    return res.json(contact)
  } catch (error) {
    return res
      .status(404)
      .json({ message: `Contact not found. Check you id` })
  }
}

const addContact = async (req, res) => {
  try {
    const { _id } = req.user
    const body = req.body
    await Contact.create({ ...body, owner: _id })
    res.status(201).json(body)
  } catch (error) {
    console.log('addContact', error.message)
  }
}

const removeContact = async (req, res) => {
  try {
    const { _id } = req.user
    const allContacts = await Contact.find({ owner: _id })
    const { id } = req.params
    const result = await Contact.findByIdAndRemove(id)
    if (result.length === allContacts.length) {
      return res.status(404).json({ message: `contact ${id} not found` })
    }
    res.status(200).json({ message: `contact ${id} deleted` })
  } catch (error) {
    console.log('removeContact', error.message)
    return res
      .status(404)
      .json({ message: `Contact not found. Check you id` })
  }
}

const updateContactFull = async (req, res) => {
  try {
    const { id } = req.params
    const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true })
    return res.status(201).json(contact)
  } catch (error) {
    res.status(404)
      .json({ message: `Contacts not found. Check you id` })
    console.log('updateContact', error.message)
  }
}

const updateContactPartial = async (req, res) => {
  try {
    const { name, email, phone, favorite } = req.body
    const { id } = req.params
    const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true })
    if (!contact) {
      return res
        .status(404)
        .json({ message: `Contacts with id '${id}' not found` })
    } else {
      if (name) { contact.name = name }
      if (email) { contact.email = email }
      if (phone) { contact.phone = phone }
      if (favorite) { contact.favorite = favorite }
    }
    await Contact.create(contact)
    res.status(201).json(contact);
  } catch (error) {
    console.log('updateContact', error.message)
  }
}

const updateFavoriteStatus = async (req, res) => {
  try {
    const { favorite } = req.body
    const { id } = req.params
    const contact = await Contact.findByIdAndUpdate(id, { favorite }, { new: true })
    console.log(contact)
    if (!contact) {
      return res
        .status(404)
        .json({ message: `Contacts with id '${id}' not found` })
    } else {
      if (favorite) { contact.favorite = favorite }
    }
    res.status(201).json(contact);
  } catch (error) {
    console.log('updateFavoriteContact', error.message)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactFull,
  updateContactPartial,
  updateFavoriteStatus
}
