
const { verifyToken } = require('../helpers/generateToken')
const userModel = require('../models/user')

const checkRoleAuth = (roles) =async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()//TODO: 12343234
        const tokenData = await verifyToken(token)//TODO: 12343234
        const userData = await userModel.findById(tokenData._id)//TODO: 12343234

        //TODO: ['admin'].includes('admin')
        if ([].concat(roles).includes(userData.rol)) {
            next()
        }else{
            res.status(409)
            res.send({
                error: 'No tienes permisos para realizar esta acción'
            })
        }
    } catch (error) {
        res.status(409)
        res.send({
            error: 'No estás autorizado'
        })
    }
}

module.exports = checkRoleAuth