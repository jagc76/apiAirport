const mongoose = require('mongoose')
const { httpError } = require('../helpers/handleErrors')
const ArrivalModel  = require('../models/arrivals')

const getArrivals = (req, res) => {
    res.send({ list: [1, 2, 3]})
}

const getArrival = (req, res) => {
    
}

const createArrival = async (req, res) => {
    try {
        const { time, from, flight, remarks } = req.body
        const itemCreate = await ArrivalModel.create({
            time, from, flight, remarks
        })
        res.send({ data: itemCreate })
    } catch (e) {
        httpError( res, e)
    }
}

const updateArrival = (req, res) => {
    
}

const deleteArrival =  (req, res) => {
    
    
}

module.exports = { getArrivals, getArrival, createArrival, updateArrival, deleteArrival }
