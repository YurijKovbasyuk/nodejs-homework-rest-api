const { Contact } = require('../../models')

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

module.exports = updateContactFull
