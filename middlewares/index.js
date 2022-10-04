const { addContactValidation, patchContactValidation, patchFavoriteValidation } = require('./contactValidation')

const { registerValidation, loginValidation, authUser, verificationEmail } = require('./authValidation')

const { upload } = require('./multer')



module.exports = { addContactValidation, patchContactValidation, patchFavoriteValidation, registerValidation, loginValidation, authUser, upload, verificationEmail }