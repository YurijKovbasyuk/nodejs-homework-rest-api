
const { registerValidation } = require('./register')
const { loginValidation } = require('./login')
const { authUser } = require('./authUser')


module.exports = { registerValidation, loginValidation, authUser }