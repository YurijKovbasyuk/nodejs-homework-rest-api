const express = require('express')
const router = express.Router()

const { registerValidation, loginValidation, authUser, verificationEmail } = require('../../middlewares')

const { registerUser, loginUser, logout, verifyEmail, resendVerifyEmail } = require('../../controllers')


// router.post('/singin')
router.post('/register', registerValidation, registerUser)

router.get('/verify/:verificationToken', verifyEmail)

router.post('/verify/', verificationEmail, resendVerifyEmail)

// router.post('/singup')
router.post('/login', loginValidation, loginUser)


// router.post('/singout')
router.get('/logout', authUser, logout)

module.exports = { authRouter: router }