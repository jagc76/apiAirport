const mongoose = require('mongoose')
const { httpError } = require('../helpers/handleErrors')
const  DepartureModel  = require('../models/departures')

const getDepartures = (req, res) => {
    res.send({ list: [1, 2, 3]})
}

const getDeparture = (req, res) => {
    
}

const createDeparture = async (req, res) => {
    try {
        const { time, to, flight, gate, remarks} = req.body
        const itemCreate = await DepartureModel.create({
            time, to, flight, gate, remarks
        })
        res.send({ data: itemCreate })
    } catch (e) {
        httpError( res, e)
    }
}

const updateDeparture = (req, res) => {
    
}

const deleteDeparture =  (req, res) => {
    
    
}

module.exports = { getDepartures, getDeparture, createDeparture, updateDeparture, deleteDeparture }
