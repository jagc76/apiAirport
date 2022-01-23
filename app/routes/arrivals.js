const express = require('express')
const router = express.Router()

const { getArrivals, getArrival, createArrival, updateArrival, deleteArrival } = require('../controllers/arrivals')

//TODO: localhost/arrivals/ -->Lista
router.get('/', getArrivals)

//TODO: localhost/arrivals/:id -->Detalle
router.get('/:id', getArrival)

router.post('/', createArrival)

router.patch('/:id', updateArrival)

router.delete('/:id', deleteArrival)

module.exports = router