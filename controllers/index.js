const { registerUser, loginUser, logout } = require('./auth')
const getCurrent = require('./users')
const { listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContactFull,
    updateContactPartial,
    updateFavoriteStatus } = require('./contacts')

module.exports = {
    registerUser, loginUser, getCurrent, logout, listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContactFull,
    updateContactPartial,
    updateFavoriteStatus
} 
