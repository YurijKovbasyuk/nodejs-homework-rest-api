
const { registerValidation } = require('./register')
const { loginValidation } = require('./login')
const { authUser } = require('./authUser')
const { verificationEmail } = require('./verificationEmail')



module.exports = { registerValidation, loginValidation, authUser, verificationEmail }