const { Contact } = require('../../models')


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


module.exports = removeContact