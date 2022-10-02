const express = require('express')
const router = express.Router()

const { addContactValidation, patchContactValidation, patchFavoriteValidation, authUser } = require('../../middlewares/')
const { listContacts, getContactById, addContact, removeContact, updateContactFull,
    updateContactPartial, updateFavoriteStatus } = require('../../controllers')

router.get('/', authUser, listContacts)

router.get('/:id', authUser, getContactById)

router.post('/', authUser, addContactValidation, addContact)

router.delete('/:id', authUser, removeContact)

router.put('/:id', authUser, addContactValidation, updateContactFull)

router.patch('/:id', authUser, patchContactValidation, updateContactPartial)

router.patch('/:id/favorite', authUser, patchFavoriteValidation, updateFavoriteStatus)


module.exports = { contactsRouter: router }
