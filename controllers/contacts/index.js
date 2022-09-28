const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContactFull = require('./updateContactFull')
const updateContactPartial = require('./updateContactPartial')
const updateFavoriteStatus = require('./updateFavoriteStatus')

module.exports = {
    listContacts, getContactById, removeContact, addContact, updateContactFull,
    updateContactPartial, updateFavoriteStatus
}
