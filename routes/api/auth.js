const express = require('express')
const router = express.Router()

const { registerValidation } = require('../../middlewares')
const { loginValidation } = require('../../middlewares')
const { registerUser } = require('../../controllers/auth')
const { loginUser } = require('../../controllers')


router.post('/register', registerValidation, registerUser)
router.post('/login', loginValidation, loginUser)



module.exports = { authRouter: router }