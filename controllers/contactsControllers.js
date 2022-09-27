const { Contact } = require('../models')

// const getAllContacts = async ({ owner: _id }) => { return await Contact.find({ owner: _id }, "", { skip: 5, limit: 5 }).populate("owner", "name email") }

const writeContact = async (contact, _id) => { await Contact.create({ ...contact, owner: _id }) }

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
    await writeContact(body, _id)
    res.status(201).json(body)
  } catch (error) {
    console.log('addContact', error.message)
  }
}

const removeContact = async (req, res) => {
  try {
    const allContacts = await getAllContacts()
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
    await writeContact(contact)
    res.status(201).json(contact)
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
    await writeContact(contact)
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
