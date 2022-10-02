const express = require('express')
const router = express.Router()

const { authUser, upload } = require('../../middlewares')
const { getCurrent, avatar, updateAvatar } = require('../../controllers')


router.get('/current', authUser, getCurrent)

router.post('/avatars', upload.single('avatar'), avatar)

router.patch('/avatars', authUser, upload.single('avatar'), updateAvatar)



module.exports = { usersRouter: router }