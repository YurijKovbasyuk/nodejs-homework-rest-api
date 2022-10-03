const express = require('express')
const router = express.Router()

const { registerValidation, loginValidation, authUser } = require('../../middlewares')

const { registerUser, loginUser, logout } = require('../../controllers')

// router.post('/singin')
router.post('/register', registerValidation, registerUser)
// router.post('/singup')
router.post('/login', loginValidation, loginUser)


// router.post('/singout')
router.get('/logout', authUser, logout)

module.exports = { authRouter: router }