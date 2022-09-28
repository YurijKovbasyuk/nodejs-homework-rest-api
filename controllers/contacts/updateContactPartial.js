const { Contact } = require('../../models')

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

module.exports = updateContactPartial

