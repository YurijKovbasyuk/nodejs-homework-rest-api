const express = require('express')
const router = express.Router()

const { addContactValidation, patchContactValidation, patchFavoriteValidation, authUser } = require('../../middlewares/')
const { listContacts, getContactById, addContact, removeContact, updateContactFull,
    updateContactPartial, updateFavoriteStatus } = require('../../controllers/contactsControllers')

router.get('/', authUser, listContacts)

router.get('/:id', getContactById)

router.post('/', authUser, addContactValidation, addContact)

router.delete('/:id', removeContact)

router.put('/:id', addContactValidation, updateContactFull)

router.patch('/:id', patchContactValidation, updateContactPartial)

router.patch('/:id/favorite', patchFavoriteValidation, updateFavoriteStatus)


module.exports = { contactsRouter: router }
