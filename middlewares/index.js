const { addContactValidation, patchContactValidation, patchFavoriteValidation } = require('./contactValidation')

const { registerValidation, loginValidation, authUser } = require('./authValidation')



module.exports = { addContactValidation, patchContactValidation, patchFavoriteValidation, registerValidation, loginValidation, authUser }