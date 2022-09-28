const { Contact } = require('../../models')

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

module.exports = addContact