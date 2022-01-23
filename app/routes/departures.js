const express = require('express')
const router = express.Router()

const { getDepartures, getDeparture, createDeparture, updateDeparture, deleteDeparture } = require('../controllers/departures')

//TODO: localhost/departures/ -->Lista
router.get('/', getDepartures)

//TODO: localhost/departures/:id -->Detalle
router.get('/:id', getDeparture)

router.post('/', createDeparture)

router.patch('/:id', updateDeparture)

router.delete('/:id', deleteDeparture)

module.exports = router