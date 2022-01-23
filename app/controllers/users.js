const mongoose = require('mongoose')
const { httpError } = require('../helpers/handleErrors')
const UserModel  = require('../models/users')


//funcion de pasar id de tipo string en objeto
const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}


const getUsers = async (req, res) => {
    try {
        const listAll = await UserModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getUser = (req, res) => {
    
}

const createUser = async (req, res) => {
    try {
        const { nombre, email, password, rol} = req.body
        const itemCreate = await UserModel.create({
            nombre,
            email, 
            password, 
            rol
        })
        res.send({ data: itemCreate })
    } catch (e) {
        httpError( res, e)
    }
}

const updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    UserModel.updateOne({ _id: parseId(id)},
    body,
    (err, docs) => {
        res.send({
            items: docs
        })
    })
}

const deleteUser = async (req, res) => { 
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items:docs
            })
        }
    )
}

module.exports = { getUsers, getUser, createUser, updateSingle, deleteUser }
