const registerUser = require('./register')
const loginUser = require('./login')
const logout = require('./logout')
const verifyEmail = require('./verifyEmail')
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports = { registerUser, loginUser, logout, verifyEmail, resendVerifyEmail }