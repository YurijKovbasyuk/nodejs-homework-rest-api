const { registerUser, loginUser, logout } = require('./auth')
const getCurrent = require('./users')

module.exports = { registerUser, loginUser, getCurrent, logout }