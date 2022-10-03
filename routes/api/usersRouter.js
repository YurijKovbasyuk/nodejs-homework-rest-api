const express = require('express')
const router = express.Router()

const { authUser, upload } = require('../../middlewares')
const { getCurrent, updateAvatar } = require('../../controllers')


router.get('/current', authUser, getCurrent)

router.patch('/avatars', authUser, upload.single('avatar'), updateAvatar)



module.exports = { usersRouter: router }