const { registerUser } = require('./auth')
const { loginUser } = require('./auth')
const getCurrent = require('./users')

module.exports = { registerUser, loginUser, getCurrent }