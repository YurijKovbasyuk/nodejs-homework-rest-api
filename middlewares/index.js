const { addContactValidation } = require('./addContactValidation')
const { patchContactValidation } = require('./patchContactValidation')
const { patchFavoriteValidation } = require('./patchFavoriteValidation')
const { registerValidation } = require('./registerValidation')
const { loginValidation } = require('./loginValidation')
const authUser = require('./authUserValidation')


module.exports = { addContactValidation, patchContactValidation, patchFavoriteValidation, registerValidation, loginValidation, authUser }