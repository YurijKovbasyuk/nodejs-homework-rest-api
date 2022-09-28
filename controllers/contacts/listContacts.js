const { Contact } = require('../../models')

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


module.exports = listContacts 