const { registerUser, loginUser, logout, verifyEmail, resendVerifyEmail } = require('./auth')
const { getCurrent, updateAvatar } = require('./users')
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
    updateFavoriteStatus,
    updateAvatar,
    verifyEmail,
    resendVerifyEmail
} 
