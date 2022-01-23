const express = require('express')
const router = express.Router()

const { getUsers, getUser, createUser, updateSingle, deleteUser } = require('../controllers/users')

//TODO: localhost/users/ -->Lista
router.get('/', getUsers)

//TODO: localhost/users/:id -->Detalle
router.get('/:id', getUser)

router.post('/', createUser)

router.put('/:id', updateSingle)

router.delete('/:id', deleteUser)

module.exports = router