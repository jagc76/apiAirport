const jwt = require('jsonwebtoken') // TODO: 

const tokenSign = async (user) => { //TODO: Generate token
    return jwt.sign(
        {
            _id: user._id, //TODO: <-----
            rol: user.rol
        }, // TODO: Payload ! Carga útil
        process.env.JWT_SECRET,//TODO: <-----Envía la clave secreta para generar el token, de .ENV
        {
            expiresIn: '2h', //TODO: tiempo de expiracion
        }
    );
}

const verifyToken = async (token) => { //TODO: Verificar token
    try {
        return jwt.verify(token, process.env.JWT_SECRET);//TODO: <-----Se verifica que la clave secreta que viene en el token corresponda al de .ENV
    } catch (error) {
        return null
    }
} 

const decodeSign = (token) => { //TODO: Verifica que el token sea valido y corresponda con el usuario
    return jwt.decode(token, {complete: true});
}

module.exports = { tokenSign, verifyToken, decodeSign }