const express = require('express')
const router = express.Router()

const { upload } = require('../../middlewares')
const { avatar } = require('../../controllers')


router.post('/avatars', upload.single('image'), avatar)


module.exports = { avatarRouter: router }