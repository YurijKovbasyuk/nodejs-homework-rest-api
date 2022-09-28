const { Contact } = require('../../models')

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


module.exports = getContactById