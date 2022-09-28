const { Contact } = require('../../models')


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

module.exports = updateFavoriteStatus
