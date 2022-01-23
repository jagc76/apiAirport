
const { verifyToken } = require('../helpers/generateToken')

const checkAuth = async (req, res, next) => {
    try {
        //TODO: Verifica que el token sea valido y corresponda con el usuario
        const token = req.headers.authorization.split(' ').pop() //TODO: 12343234
        const tokenData = await verifyToken(token)
        console.log(tokenData)
        if (tokenData._id) {
            next()
        }else{
            res.status(409)
            res.send({
                message: 'token invalido'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(409)
        res.send({
            ok: false,
            message: 'Token no válido'
        })
    }
}

module.exports = checkAuth