const express = require('express')
const router = express.Router()

const { registerValidation, loginValidation, authUser } = require('../../middlewares')

const { registerUser, loginUser, getCurrent } = require('../../controllers')


router.post('/register', registerValidation, registerUser)
router.post('/login', loginValidation, loginUser)

router.get('/current', authUser, getCurrent)


module.exports = { authRouter: router }